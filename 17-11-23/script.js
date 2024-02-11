//Sulla base della lezione del giorno, creare un timer al cui scadere di 3 secondi
//e mezzo chieda all'utente se è maggiorenne con un popup. Il popup è solo testuale, nessun altro elemento.

const popupEl = (text) => {
  const wrapperEl = document.createElement("div");
  const textEl = document.createElement("h1");
  const buttonSi = document.createElement("button");
  const buttonNo = document.createElement("button");

  textEl.textContent = text;
  buttonSi.textContent = "si";
  buttonSi.className = "btnYes";
  buttonNo.textContent = "no";
  buttonNo.className = "btnNo";

  wrapperEl.append(textEl, buttonSi, buttonNo);
  return wrapperEl;
};

setTimeout(() => {
  const currentPopup = popupEl("QUESTO È UN POPUP");
  document.body.append(currentPopup);

  const buttonSiEl = document.querySelector(".btnYes");
  const buttonNoEl = document.querySelector(".btnNo");

  buttonSiEl.addEventListener("click", () => currentPopup.remove());
  buttonNoEl.addEventListener(
    "click",
    () => (window.location.href = "http://google.com")
  );
}, 3500);

// Eseguire una chimata di tipo fetch al seguente indirizzo https://dummyjson.com/products.
// Dalla risposta che ne consegue, stampare un array che contiene non tutti i valori ma solo
// quelli il cui prezzo (chiave price) sia inferiore a 50.

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.map((prod) => {
      if (prod.price < 50) {
        console.log(prod.title + ":" + " " + prod.price + " euro");
      }
    });
  });
