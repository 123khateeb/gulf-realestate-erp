import os
from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# 1. Password Hashing Setup
# Standard bcrypt setup for securing passwords
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# 2. JWT Configuration
# SECRET_KEY is used to sign the token so it cannot be faked
SECRET_KEY = os.getenv("SECRET_KEY", "your-very-secret-key-change-it-in-env")
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def hash_password(password: str):
    """
    Takes a plain password and returns a secure hashed string.
    """
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str):
    """
    Checks if the provided password matches the stored hash.
    Used during login.
    """
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict):
    """
    Generates a secure JWT token for the user.
    This token will be used to identify the user in future requests.
    """
    to_encode = data.copy()
    
    # Set the expiration time (standard is 30 minutes)
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    # Add expiration time to the data we want to encode
    to_encode.update({"exp": expire})
    
    # Create the final encoded JWT token
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_access_token(token: str):
    """
    Decodes the JWT token to get the user data back.
    If the token is expired or fake, it returns None.
    """
    try:
        # jwt.decode checks the signature and expiration automatically
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except Exception:
        # If token is invalid or expired, return None
        return None