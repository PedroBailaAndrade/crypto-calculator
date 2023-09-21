import { useAppContext } from "../../AppContext";
import { getCurrencyData } from "../../hooks/getCurrencyData";
import { getMarketData } from "../../hooks/getMarketData";
import { getMarketTickersData } from "../../hooks/getMarketTickersData";
import { useAxios } from "../../hooks/useAxios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import TickerCard from "../TickerCard/TickerCard";
import Title from "../Title/Title";
import "./Tickers.css";

const Tickers = () => {
  const {
    currencies,
    inputCurrency,
    inputMarket,
    markets,
    tickerResults,
    setInputCurrency,
    setInputMarket,
    setTickerResults,
  } = useAppContext();

  const updateInputCurrency = (newCurrency) => {
    setInputCurrency(getCurrencyData(newCurrency, currencies));
  };

  const updateInputMarket = (newMarket) => {
    setInputMarket(getMarketData(newMarket, markets));
  };

  const tickersData = useAxios(
    `exchanges/${inputMarket.id}/tickers?coin_ids=${inputCurrency.id}&include_exchange_logo=false&page=1&depth=false`
  );

  const handleSubmit = () => {
    const tickersEntries = getMarketTickersData(tickersData);

    setTickerResults(tickersEntries);
  };

  return (
    <div className="tickers">
      <Title />
      <div className="tickers-content-wrapper">
        <Input
          label="coin"
          selectedValue={inputCurrency}
          options={currencies}
          type="currency"
          setInputValue={updateInputCurrency}
        />
        <Input
          label="market"
          selectedValue={inputMarket}
          options={markets}
          type="market"
          setInputValue={updateInputMarket}
        />
        <Button onClick={handleSubmit} />
      </div>
      <div className="tickers-results">
        {tickerResults.map((ticker) => (
          <TickerCard key={Math.random()} ticker={ticker} />
        ))}
      </div>
    </div>
  );
};

export default Tickers;
