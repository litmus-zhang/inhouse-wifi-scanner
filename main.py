from fastapi import FastAPI
from scan import scan_wifi 

app = FastAPI()


@app.get("/")
def read_root():
	scan_result = scan_wifi()
	return {"available wifi" : scan_result}



