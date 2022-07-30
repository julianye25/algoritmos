// - contar elementos repetidos
const numbers = [1, 1, 5, 6, 3, 4, 6, 22, 33, 5, 10, 10, 2, 5];

const countElementsMethods = (array) => {
  const result = [...new Set(array)].map((num) => {
    return {
      element: num,
      count: numbers.filter((n) => n === num).length,
    };
  });
  return result;
};

const countElements = (array) => {
  const resultHC = [];

  for (const num of array) {
    let newElment = true;

    for (const res of resultHC) {
      if (res.element == num) {
        res.count++;
        newElment = false;
      }
    }

    if (newElment) {
      resultHC[resultHC.length] = {
        element: num,
        count: 1,
      };
    }
  }

  return resultHC;
};

console.log(countElements(numbers));
console.log(countElementsMethods(numbers));
