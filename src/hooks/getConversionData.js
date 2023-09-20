import { getCurrencySymbol } from "./getCurrencySymbol";

export const getConversionData = (number, object, array) => {
  const [originCurrencyID] = Object.keys(object);
  const [targetCurrency] = Object.keys(object[originCurrencyID]);
  const targetValue = Math.round(
    parseFloat(number) * parseFloat(object[originCurrencyID][targetCurrency])
  );

  const originCurrency = getCurrencySymbol(originCurrencyID, array);

  return {
    inputAmount: number,
    originCurrency,
    targetCurrency,
    targetValue,
  };
};
