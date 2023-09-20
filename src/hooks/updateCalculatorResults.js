export const updateCalculatorResults = (previousArray, newEntry) => {
  let array = [...previousArray, newEntry];

  if (array.length > 6) {
    array = array.slice(1);
  }

  return array;
};
