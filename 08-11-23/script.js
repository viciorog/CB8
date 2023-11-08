const putSpacer = () => console.log("----------");

const sum = (first, second, third) => first + second + third;
const sub = (first, second, third) => first - second - third;
const mult = (first, second, third) => first * second * third;
const div = (first, second, third) => first / second / third;

const calculator = (fn) => {
  const firstNum = prompt("inserisci il primo numero");
  const secondNum = prompt("inserisci il secondo numero");
  const thirdNum = prompt("inserisci il terzo numero");
  return fn(parseFloat(firstNum), parseFloat(secondNum), parseFloat(thirdNum));
};

// console.log(calculator(div));

// secondo esercizio

const comics = [
  {
    id: 1,
    name: "One Piece",
    url: "https://m.media-amazon.com/images/I/81MLf-pgXrL._AC_UF1000,1000_QL80_.jpg",
    description: "First volume of One Piece",
  },
  {
    id: 2,
    name: "Berserk",
    url: "https://m.media-amazon.com/images/I/71jnEkjX8RL._AC_UF1000,1000_QL80_.jpg",
    description: "First volume of Berserk",
  },
  {
    id: 3,
    name: "Batman year 1",
    url: "https://m.media-amazon.com/images/I/61iBF5Fse4L._AC_UF1000,1000_QL80_.jpg",
    description: "One of the best stories of Batman",
  },
  {
    id: 4,
    name: "Akira",
    url: "https://m.media-amazon.com/images/I/71iqSYeDj6S._AC_UF1000,1000_QL80_.jpg",
    description: "Third volume of Akira",
  },
];

comics.forEach((comic) => {
  console.log(comic.description);
});

putSpacer();

comics.map((comic) => {
  console.log(comic.description);
});
// in questo caso non cambia nulla, la diferrenza sta qui:

putSpacer();

let comicNewForEach = comics.forEach((comic) => {
  return comic.description;
});

console.log(comicNewForEach);

putSpacer();

let comicNewMap = comics.map((comic) => {
  return comic.description;
});

console.log(comicNewMap);

// in questo caso la differenza sta nel fatto che il forEach da come risultato 'undefined'
// se lo si utilizza con return, l'unica funzione di forEach è iterare.
// mentre il Map mi stampa un nuovo array! Avrei anche potuto dare valori diversi e
// map mi avrebbe stampato un nuovo array con nuovi valori

let comicForEach = comics.forEach((comic) => {
  return comic.description.length <= 23;
});

putSpacer();

console.log(comicForEach);

putSpacer();

// in questo caso quali elementi abbiano meno di 23 caratteri
const comicMap = comics.map((comic) => {
  return comic.description.length <= 23;
});
console.log(comicMap);

putSpacer();

// ESERCIZIO N3 AVANZATO

const array1 = [3, 6, 9, 12];

const array2 = [5, 10, 15, 20];

const trasformAndFilter = (firstArr, secondArr) => {
  const firstArrayTransformed = firstArr.map((el) => el * 2);
  const secondArrayTransformed = secondArr.map((el) => el + 5);
  console.log(firstArrayTransformed);
  console.log(secondArrayTransformed);

  const firstArrayFilter = firstArrayTransformed.filter((el) => el > 10);
  const secondArrayFilter = secondArrayTransformed.filter((el) => el % 2 === 0);
  console.log(firstArrayFilter);
  console.log(secondArrayFilter);
};

trasformAndFilter(array1, array2);
