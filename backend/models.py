from enum import Enum
from typing import Optional
from datetime import datetime
from pydantic import BaseModel
from sqlmodel import SQLModel, Field, Column, DateTime, text

# 1. Role define karna (Wahi purana logic)
class UserRole(str, Enum):
    ADMIN = "admin"
    MANAGER = "manager"
    AGENT = "agent"
    CLIENT = "client"

# 2. User Table with Industry Standards
class User(SQLModel, table=True):
    # Schema specify karna (Professional approach)
    __table_args__ = {"schema": "auth"} 

    id: Optional[int] = Field(default=None, primary_key=True)
    full_name: str
    email: str = Field(unique=True, index=True)
    hashed_password: str
    role: UserRole = Field(default=UserRole.CLIENT)
    is_active: bool = Field(default=True)

    # Audit Fields (Standard fields for tracking)
    # sa_column use karke hum Postgres ki internal functions use karte hain
    created_at: datetime = Field(
        sa_column=Column(DateTime(timezone=True), server_default=text("now()"))
    )
    updated_at: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), 
            server_default=text("now()"), 
            onupdate=text("now()")
        )
    )


# This model defines what data we expect from the user during login
class LoginRequest(BaseModel):
    email: str
    password: str


# To receive data from the Frontend form
class UserCreate(BaseModel):
    full_name: str
    email: str
    password: str
    role: UserRole = UserRole.AGENT # Default role is Agent