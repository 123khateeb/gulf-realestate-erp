from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Gulf Real Estate API is Running!"}