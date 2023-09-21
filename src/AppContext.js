import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "./hooks/useAxios";

const tabs = ["calculator", "tickers"];
const initialCurrencies = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
];
const initialMarkets = [
  {
    id: "binance",
    name: "Binance",
  },
];

const AppContext = createContext("");

const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);

  const [inputAmount, setInputAmount] = useState(159);
  const [inputCurrency, setInputCurrency] = useState(initialCurrencies[0]);
  const [inputMarket, setInputMarket] = useState(initialMarkets[0]);
  const [targetCurrency, setTargetCurrency] = useState(initialCurrencies[1]);

  const [tickerResults, setTickerResults] = useState([]);
  const [calculatorResults, setCalculatorResults] = useState([]);

  const allCurrencies = useAxios("coins/list");
  const supportedCurrencies = useAxios("simple/supported_vs_currencies");
  const marketsResult = useAxios("exchanges/list");

  useEffect(() => {
    if (allCurrencies.data !== null && supportedCurrencies.data !== null) {
      setCurrencies(
        allCurrencies.data.filter((object) =>
          supportedCurrencies.data.includes(object.symbol)
        )
      );
    }
  }, [allCurrencies.data, supportedCurrencies.data]);

  useEffect(() => {
    if (marketsResult.data !== null) {
      setMarkets(marketsResult.data);
    }
  }, [marketsResult.data]);

  useEffect(() => {
    let timer;

    if (currencies.length > 0 && markets.length > 0) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currencies, markets]);

  const value = {
    activeTab,
    calculatorResults,
    currencies,
    inputAmount,
    inputCurrency,
    inputMarket,
    loading,
    markets,
    tabs,
    targetCurrency,
    tickerResults,
    setActiveTab,
    setInputAmount,
    setInputCurrency,
    setInputMarket,
    setCalculatorResults,
    setTickerResults,
    setTargetCurrency,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
