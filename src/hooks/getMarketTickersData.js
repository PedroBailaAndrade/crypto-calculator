import { convertTimestamp } from "./convertTimestamp";

export const getMarketTickersData = (object) => {
  const tickers = object.data.tickers;

  const cleanedData = tickers.map((ticker) => ({
    base: ticker.base,
    last: ticker.last,
    market: ticker.market.name,
    target: ticker.target,
    timestamp: convertTimestamp(ticker.timestamp),
    trade_url: ticker.trade_url,
    volume: ticker.volume,
  }));

  return cleanedData;
};
