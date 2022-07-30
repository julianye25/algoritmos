// - Invertir cadena
const reverseWordMethod = (word) => {
  const newWord = word.split("").reverse().join("");
  return newWord;
};

const reverseWord = (word) => {
  let newWord = "";

  for (let c of word) {
    newWord = c + newWord;
  }

  return newWord;
};

console.log(reverseWordMethod("Andres"));
console.log(reverseWord("yepes"));
