from sqlmodel import Session, select
from database import engine
from models import User, UserRole
from auth_utils import hash_password

def create_initial_admin():
    """
    Creates the first Super Admin user if it doesn't already exist.
    """
    # Open a connection to the database
    with Session(engine) as session:
        # Check if an admin with this email already exists
        query = select(User).where(User.email == "admin@gulf.com")
        existing_admin = session.exec(query).first()

        if existing_admin:
            print("Admin user already exists in the database.")
            return

        # Create a new Admin user object
        # We hash the password before saving for security
        admin = User(
            full_name="Khateeb Admin",
            email="admin@gulf.com",
            hashed_password=hash_password("Admin@123"),
            role=UserRole.ADMIN,
            is_active=True
        )

        # Save to database
        session.add(admin)
        session.commit()
        print("Initial Admin user created successfully!")

if __name__ == "__main__":
    create_initial_admin()