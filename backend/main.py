from fastapi import FastAPI, Depends, HTTPException, status
from sqlmodel import Session, select
from database import engine, init_db
from models import User, LoginRequest, UserCreate
from auth_utils import verify_password, create_access_token, decode_access_token, hash_password
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # React ka address
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Database helper (Dependency)
def get_session():
    with Session(engine) as session:
        yield session

@app.on_event("startup")
def on_startup():
    init_db()

# --- Yeh Root Route hai jo browser mein "Status: Online" dikhayega ---
@app.get("/")
def read_root():
    return {"status": "Online", "message": "Gulf Real Estate API is running"}

# --- Yeh Login Route hai (POST request) ---
@app.post("/auth/login")
def login(login_data: LoginRequest, session: Session = Depends(get_session)):
    # 1. User ko email se dhoondna
    statement = select(User).where(User.email == login_data.email)
    user = session.exec(statement).first()

    # 2. Password verify karna
    if not user or not verify_password(login_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    # 3. Token generate karna
    token_data = {"sub": user.email, "role": user.role}
    access_token = create_access_token(data=token_data)

    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": user.role
    }

# Isse /docs ko pata chalta hai ki hum standard login flow use karenge
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Professional middleware to verify the user's token on every request.
    """
    payload = decode_access_token(token)
    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return payload # This contains {"sub": email, "role": role}



@app.get("/admin/dashboard-stats")
def get_admin_stats(current_user: dict = Depends(get_current_user)):
    """
    Only users with 'admin' role can see this data.
    """
    # Check the role from the token
    if current_user.get("role") != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You do not have permission to access this"
        )
    
    return {
        "message": "Welcome Admin!",
        "stats": {
            "total_properties": 150,
            "active_leads": 45,
            "revenue": "500,000 AED"
        }
    }



# API 1: Get Profile (To show user name on Dashboard)
@app.get("/auth/me")
def get_me(current_user: dict = Depends(get_current_user), session: Session = Depends(get_session)):
    # Find user details from the email stored in the token
    statement = select(User).where(User.email == current_user.get("sub"))
    user = session.exec(statement).first()
    return user

# API 2: Admin creating a new Agent/Manager
@app.post("/admin/create-user")
def create_user(user_data: UserCreate, current_user: dict = Depends(get_current_user), session: Session = Depends(get_session)):
    # 1. Only Admin can create new users
    if current_user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Only Admins can perform this action")

    # 2. Check if user already exists
    existing = session.exec(select(User).where(User.email == user_data.email)).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    # 3. Create new user
    new_user = User(
        full_name=user_data.full_name,
        email=user_data.email,
        hashed_password=hash_password(user_data.password),
        role=user_data.role
    )
    session.add(new_user)
    session.commit()
    return {"message": f"User {user_data.full_name} created successfully!"}