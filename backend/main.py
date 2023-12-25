from fastapi import FastAPI
from pydantic import BaseModel
from settings import STOCK_OPTIONS

app = FastAPI()


class PredictionRequest(BaseModel):
    stock_choices: list[str]
    risk_tolerance: float  # from 0 to 1


@app.get("/options")
async def listOptions():
    return {"stocks": STOCK_OPTIONS}


@app.post("/predict")
async def predict(request: PredictionRequest):
    # should return the result from the quantum model
    # wait until quantum model completed to implement
    ...
    raise NotImplementedError
