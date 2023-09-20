import { getConversionData } from "../../hooks/getConversionData";
import { getCurrencyData } from "../../hooks/getCurrencyData";
import { useAppContext } from "../../AppContext";
import { useAxios } from "../../hooks/useAxios";
import { updateCalculatorResults } from "../../hooks/updateCalculatorResults";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Title from "../Title/Title";
import "./Calculator.css";

const Calculator = () => {
  const {
    currencies,
    inputAmount,
    inputCurrency,
    previousCalculatorResults,
    targetCurrency,
    setInputAmount,
    setInputCurrency,
    setPreviousCalculatorResults,
    setTargetCurrency,
  } = useAppContext();

  const updateAmount = (newAmount) => {
    setInputAmount(newAmount);
  };

  const updateInputCurrency = (newCurrency) => {
    setInputCurrency(getCurrencyData(newCurrency, currencies));
  };

  const updateTargetCurrency = (newCurrency) => {
    setTargetCurrency(getCurrencyData(newCurrency, currencies));
  };

  const conversionRate = useAxios(
    `/simple/price?ids=${inputCurrency.id}&vs_currencies=${targetCurrency.symbol}`
  );

  const handleSubmit = () => {
    const entry = getConversionData(
      inputAmount,
      conversionRate.data,
      currencies
    );

    setPreviousCalculatorResults(
      updateCalculatorResults(previousCalculatorResults, entry)
    );
  };

  return (
    <div className="calculator">
      <Title />
      <div className="calculator-content-wrapper">
        <Input
          label="from"
          selectedValue={inputAmount}
          type="number"
          setInputValue={updateAmount}
        />
        <Input
          options={currencies}
          selectedValue={inputCurrency}
          type="currency"
          setInputValue={updateInputCurrency}
        />
        <div className="arrowTo">
          <img alt="arrow-to" src="./arrow-to.svg" />
        </div>
        <Input
          label="to"
          options={currencies}
          selectedValue={targetCurrency}
          type="currency"
          setInputValue={updateTargetCurrency}
        />
        <Button onClick={handleSubmit} />
      </div>
      {previousCalculatorResults.length > 0 && (
        <>
          <p className="subTitle">Result</p>
          <div className="results">
            {previousCalculatorResults.map((result) => (
              <div key={result.inputAmount * Math.random()} className="result">
                <p>
                  {result.inputAmount} {result.originCurrency}
                  <span> is worth </span>
                  {result.targetValue} {result.targetCurrency}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Calculator;
