//- Crear array de elementos separados por espacio
const words = "pato perro   aguila   oso     gato";

const createArrayOfElementsForSpaceMothods = (words) => {
  const array = words.replace(/\s+/g, " ").split(" ");

  return array;
};

const createArrayOfElementsForSpace = (words) => {
  const array = [];
  let w = "";

  for (const c of words) {
    if (c !== " ") {
      w += c;
    } else if (w.length > 0) {
      array[array.length] = w;
      w = "";
    }
  }

  if (w.length > 0) {
    array[array.length] = w;
  }

  return array;
};

console.log(createArrayOfElementsForSpaceMothods(words));
console.log(createArrayOfElementsForSpace(words));

export default createArrayOfElementsForSpace;
