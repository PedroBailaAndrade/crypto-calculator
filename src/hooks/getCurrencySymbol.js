export const getCurrencySymbol = (id, array) => {
  const name = array.find((object) => object.id === id);

  return name.symbol;
};
