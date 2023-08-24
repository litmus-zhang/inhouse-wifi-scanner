from fastapi import FastAPI
from app.scan import scan_wifi
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def scan():
    scan_result = scan_wifi()
    return {"available wifi": scan_result}
