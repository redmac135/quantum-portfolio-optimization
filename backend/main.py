from fastapi import FastAPI

app = FastAPI()

STOCK_OPTIONS = ("apple", "bob miller")


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/options")
async def listOptions():
    return {"stocks": STOCK_OPTIONS}
