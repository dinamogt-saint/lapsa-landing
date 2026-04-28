from pydantic import BaseModel, EmailStr, field_validator


class WaitlistRequest(BaseModel):
    email: EmailStr

    @field_validator("email")
    @classmethod
    def email_must_be_reasonable(cls, v: str) -> str:
        if len(v) > 254:
            raise ValueError("Email too long")
        return v.lower().strip()


class WaitlistResponse(BaseModel):
    success: bool
    message: str
