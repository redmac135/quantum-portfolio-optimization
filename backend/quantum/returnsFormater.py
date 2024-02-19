# updates the returns by applying the penalty term to them
def updateReturns(returns, q):
    return {stock: q * returned for stock, returned in returns.items()}


# Add Updated returns to final Linear( both tickers are the same) Dictionary
def updateFinalLinearDic(finalDictionary, returnsDic):
    print(returnsDic)
    # Go through List of all Variables
    for key in finalDictionary.keys():
        stock_symbol_1, stock_symbol_2 = key
        # Split the variable names by format expected to check if they are the same relationship

        # if they are, create new element in result. Add the value from master dictionary and the value from updated stock returns dictionary
        if stock_symbol_1 == stock_symbol_2:

            finalDictionary[key] = finalDictionary.get(key, 0)
            print(
                "I just subtracted this: "
                + str(returnsDic.get(stock_symbol_1.split("_")[0]))
                + str(key)
                + "from"
                + str(finalDictionary[key])
            )
            finalDictionary[key] -= returnsDic.get(stock_symbol_1.split("_")[0])
            print(str(finalDictionary[key]))
