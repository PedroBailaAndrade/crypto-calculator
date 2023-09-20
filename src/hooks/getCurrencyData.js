export const getCurrencyData = (symbol, array) => {
  const data = array.find((object) => object.symbol === symbol);

  return data;
};
