from fastapi import FastAPI
from pydantic import BaseModel
from settings import STOCK_OPTIONS
from typing import Dict
from utils import get_historical_stock_prices, calculate_covariance
import itertools

app = FastAPI()


class PredictionRequest(BaseModel):
    stock_choices: list[str]
    risk_tolerance: float  # from 0 to 1


@app.get("/options")
async def listOptions() -> Dict[str, list[str]]:
    return {"stocks": STOCK_OPTIONS}


@app.post("/predict")
async def predict(request: PredictionRequest):
    # list stock data
    stock_data: Dict[str, float] = {}
    for stock in request.stock_choices:
        if stock not in STOCK_OPTIONS:
            raise ValueError(f"Stock {stock} not in options")
        stock_data[stock] = get_historical_stock_prices(stock)

    # calculate covariance matrix
    covarience_matrix: Dict[tuple(str, str), float] = {}
    for pair in itertools.combinations(request.stock_choices, 2):
        # calculate covariance between two stocks
        # covariance_matrix[pair] = ...
        covarience_matrix[pair] = calculate_covariance(
            stock_data[pair[0]], stock_data[pair[1]]
        )

    raise NotImplementedError
