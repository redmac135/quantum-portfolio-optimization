"use client";

import { createContext, useState } from "react";

type Investment = {
  ticker: string;
  name: string;
  allocation: number;
  beta: number;
  esg: number;
  principle: number;
};

type Results = {
  stocks: Investment[];
};

const [results, setResults] = useState<Results | null>(null);

export const resultsContext = createContext({ results, setResults });
