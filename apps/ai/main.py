from fastapi import FastAPI

app = FastAPI()

@app.get("/api/ai/health")
def read_health():
    return {"status": "AI Engine is running"}