import logging
import time
from contextlib import asynccontextmanager

from fastapi import FastAPI, Depends, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from slowapi.errors import RateLimitExceeded

from database import engine, get_db, Base
from models import WaitlistEntry
from schemas import WaitlistRequest, WaitlistResponse
from rate_limiter import limiter, _rate_limit_exceeded_handler

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(name)s — %(message)s",
)
logger = logging.getLogger("lapsa")


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create tables on startup
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Database tables ready")
    yield
    logger.info("Shutting down")


app = FastAPI(
    title="Lapsa API",
    version="0.1.0",
    lifespan=lifespan,
)

# Rate limiter
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://lapsa.lv"],
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type", "Authorization"],
    allow_credentials=False,
)

# Trusted hosts
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "127.0.0.1", "lapsa.lv", "*.lapsa.lv"],
)


# Request logging middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start = time.time()
    response = await call_next(request)
    duration_ms = round((time.time() - start) * 1000)
    logger.info(
        "%s %s %s %dms",
        request.method,
        request.url.path,
        response.status_code,
        duration_ms,
    )
    return response


@app.post("/waitlist", response_model=WaitlistResponse)
@limiter.limit("5/minute")
async def join_waitlist(
    request: Request,
    payload: WaitlistRequest,
    db: AsyncSession = Depends(get_db),
):
    email = payload.email
    ip = request.client.host if request.client else "unknown"

    # Check if already registered (don't leak info — return success)
    existing = await db.execute(
        select(WaitlistEntry).where(WaitlistEntry.email == email)
    )
    if existing.scalar_one_or_none():
        logger.info("Duplicate waitlist signup attempt: %s", email)
        return WaitlistResponse(
            success=True,
            message="You're on the list! We'll be in touch.",
        )

    entry = WaitlistEntry(email=email, ip_address=ip, source="landing_page")
    db.add(entry)
    try:
        await db.commit()
        logger.info("New waitlist signup: %s from %s", email, ip)
        return WaitlistResponse(
            success=True,
            message="You're on the list! We'll be in touch.",
        )
    except IntegrityError:
        await db.rollback()
        logger.warning("IntegrityError for email %s", email)
        return WaitlistResponse(
            success=True,
            message="You're on the list! We'll be in touch.",
        )


@app.get("/health")
async def health():
    return {"status": "ok"}
