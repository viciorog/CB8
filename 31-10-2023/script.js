const animals = [
  "",
  "leone",
  "giraffa",
  "serpe",
  "cane",
  "gatto",
  "coniglio",
  "elefante",
  "delfino",
];
for (let i = 1; i < animals.length; i++) {
  console.log(i + ": " + animals[i]);
}

// oppure si può anche fare in questo modo:

const animals = [
  "leone",
  "giraffa",
  "serpe",
  "cane",
  "gatto",
  "coniglio",
  "elefante",
  "delfino",
];

for (let i = 0; i < animals.length; i++) {
  console.log(i + 1 + ": " + animals[i]);
}
