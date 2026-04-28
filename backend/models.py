from sqlalchemy import Column, Integer, String, DateTime, func
from database import Base


class WaitlistEntry(Base):
    __tablename__ = "waitlist"
    id = Column(Integer, primary_key=True)
    email = Column(String(255), unique=True, nullable=False, index=True)
    source = Column(String(100), default="landing_page")
    created_at = Column(DateTime, server_default=func.now())
    ip_address = Column(String(45))  # store for spam prevention
