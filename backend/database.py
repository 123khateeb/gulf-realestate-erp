import os
from sqlmodel import create_engine, SQLModel, Session
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, echo=True)

def init_db():
    # models ko import karna zaroori hai taaki SQLModel ko tables ka pata chale
    import models 
    SQLModel.metadata.create_all(engine)