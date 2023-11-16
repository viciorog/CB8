// Esercizio 1
// Sulla base della lezione del 14 Novembre, trasferire tutta la
// parte logica del codice fatto a lezione in modo statico (HTML)
// in modo dinamico (JAVASCRIPT). Quindi creando voi gli elementi tramite JS.
const mockData = [
  {
    id: 1,
    roboName: "Harry",
    price: 445,
    imgUrl: "https://robohash.org/Harry",
  },
  {
    id: 2,
    roboName: "John",
    price: 350,
    imgUrl: "https://robohash.org/John",
  },
  {
    id: 3,
    roboName: "Franky",
    price: 800,
    imgUrl: "https://robohash.org/Franky",
  },
  {
    id: 4,
    roboName: "Pluto",
    price: 5000,
    imgUrl: "https://robohash.org/Pluto",
  },
  {
    id: 5,
    roboName: "Steven",
    price: 650,
    imgUrl: "https://robohash.org/Steven",
  },
  {
    id: 6,
    roboName: "Marco",
    price: 850,
    imgUrl: "https://robohash.org/Marco",
  },
];

const roboProdGen = (roboData) => {
  const divEl = document.createElement("div");
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("div");
  const priceEl = document.createElement("p");
  const nameEl = document.createElement("h4");

  divEl.className = "robo-list";
  wrapperEl.className = "robo";
  imgEl.src = roboData.imgUrl;
  imgEl.alt = roboData.roboName;
  textEl.className = "text";
  priceEl.textContent = roboData.price + "$";
  nameEl.textContent = roboData.roboName;
  textEl.append(nameEl, priceEl);
  wrapperEl.append(imgEl, textEl);
  divEl.appendChild(wrapperEl);
  sectionEl.append(divEl);
  return divEl;
};

const body = document.body;

const sectionEl = document.createElement("section");
const descriptionEl = document.createElement("h3");
sectionEl.className = "recommended";
descriptionEl.textContent = "Reccomended 4 you";
body.insertBefore(descriptionEl, body.firstChild);

mockData.map((roboData) => {
  const roboElement = roboProdGen(roboData);
  body.appendChild(roboElement);
});

// Esercizio 2
// Applicare un costrutto per la gestione degli errori Try e Catch all'esecuzione
// della funzione roboProdGen. Non importa scatenare alcun errore specifico,
// basta la sintassi corretta applicata nel modo giusto.

// const roboProdGen = (roboData) => {
//   try {
//     const sectionEl = document.createElement("section");
//     const descriptionEl = document.createElement("h3");
//     const divEl = document.createElement("div");
//     const wrapperEl = document.createElement("div");
//     const imgEl = document.createElement("img");
//     const textEl = document.createElement("div");
//     const priceEl = document.createElement("p");
//     const nameEl = document.createElement("h4");

//     sectionEl.className = "recommended";
//     descriptionEl.textContent = "Reccomended 4 you";
//     divEl.className = "robo-list";
//     wrapperEl.className = "robo";
//     imgEl.src = roboData.imgUrl;
//     imgEl.alt = roboData.roboName;
//     textEl.className = "text";
//     priceEl.textContent = roboData.price + "$";
//     nameEl.textContent = roboData.roboName;
//     textEl.append(priceEl, nameEl);
//     wrapperEl.append(imgEl, textEl);
//     divEl.appendChild(wrapperE);
//     sectionEl.append(descriptionEl, divEl);
//     return sectionEl;
//   } catch (error) {
//     console.error("Si è verificato un errore:", error);
//   }
// };

// const body = document.body;

// mockData.map((roboData) => {
//   const roboElement = roboProdGen(roboData);
//   body.appendChild(roboElement);
// });
