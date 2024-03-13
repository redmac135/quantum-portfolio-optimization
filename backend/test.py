import asyncio
from main import predict, PredictionRequest

text_request = PredictionRequest(
    stock_choices=["RGLD", "GOOG", "LYV", "LNW", "ADC","CNXC","SHLS","IAS","AMZN","FIVE","LVS","CELH","NE","LNTH","TECH","AIR","ATI"], risk_tolerance=0.5
)

def test():
    return asyncio.run(predict(text_request))

test()