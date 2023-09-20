import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "./hooks/useAxios";

const AppContext = createContext("");

const AppProvider = ({ children }) => {
  const tabs = ["calculator", "tickers"];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [currencies, setCurrencies] = useState([]);
  const [inputAmount, setInputAmount] = useState(159);
  const [inputCurrency, setInputCurrency] = useState({
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  });
  const [inputMarket, setInputMarket] = useState({
    id: "binance",
    name: "Binance",
  });
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  const [previousCalculatorResults, setPreviousCalculatorResults] = useState(
    []
  );
  const [previousTickerResults, setPreviousTickerResults] = useState([]);
  const [targetCurrency, setTargetCurrency] = useState({
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  });

  const allCurrencies = useAxios("coins/list");
  const supportedCurrencies = useAxios("simple/supported_vs_currencies");
  const marketsResult = useAxios("exchanges/list");

  useEffect(() => {
    let timer;

    if (
      !allCurrencies.loading &&
      !allCurrencies.error &&
      allCurrencies.data.length > 0 &&
      !supportedCurrencies.loading &&
      !supportedCurrencies.error &&
      supportedCurrencies.data.length > 0 &&
      !marketsResult.error &&
      !marketsResult.loading &&
      marketsResult.data.length > 0
    ) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 700);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [allCurrencies, supportedCurrencies, marketsResult]);

  useEffect(() => {
    if (
      !loading &&
      !allCurrencies.loading &&
      allCurrencies.data.length > 0 &&
      !supportedCurrencies.loading &&
      supportedCurrencies.data.length > 0
    ) {
      setCurrencies(
        allCurrencies.data.filter((object) =>
          supportedCurrencies.data.includes(object.symbol)
        )
      );
    }
  }, [
    allCurrencies.data,
    allCurrencies.loading,
    supportedCurrencies.data,
    supportedCurrencies.loading,
    loading,
  ]);

  useEffect(() => {
    if (!loading && !marketsResult.loading && marketsResult.data.length > 0) {
      setMarkets(marketsResult.data);
    }
  }, [marketsResult.data, marketsResult.loading, loading]);

  const value = {
    activeTab,
    currencies,
    inputAmount,
    inputCurrency,
    inputMarket,
    loading,
    markets,
    previousCalculatorResults,
    previousTickerResults,
    tabs,
    targetCurrency,
    setActiveTab,
    setInputAmount,
    setInputCurrency,
    setInputMarket,
    setPreviousCalculatorResults,
    setPreviousTickerResults,
    setTargetCurrency,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
