export const getMarketData = (id, array) => {
  const data = array.find((object) => object.id === id);

  return data;
};
