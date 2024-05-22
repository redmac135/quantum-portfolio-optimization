type Investment = {
  ticker: string;
  name: string;
  allocation: number;
  beta: number;
  esg: number;
  principle: number;
};

export type Results = {
  stocks: Investment[];
} | null;