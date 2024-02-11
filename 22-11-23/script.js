//ESERCIZIO 1

// const onHttpGET = async (BASE_URL) => {
//   const res = await fetch(BASE_URL);
//   const data = await res.json();

//   return data;
// };

// onHttpGET("https://picsum.photos/v2/list")
//   .then((data) => {
//     data.map((image) => console.log(image.download_url));
//   })
//   .catch((error) => {
//     console.error("Errore nella richiesta HTTP", error);
//   });

//ESERCIZIO 2

// const imageRendering = {
//   id: "0",
//   author: "Alejandro Escamilla",
//   download_url: "https://picsum.photos/id/0/5000/3333",
// };

// const imageText = () => {
//   const wrapperEl = document.createElement("div");
//   const imgEl = document.createElement("img");
//   const textEl = document.createElement("text");

//   imgEl.src = imageRendering.download_url;
//   imgEl.alt = imageRendering.id;
//   textEl.textContent = imageRendering.author;

//   wrapperEl.append(imgEl, textEl);

//   return wrapperEl;
// };

// document.body.appendChild(imageText(imageRendering));

//ESERCIZIO 3

const onHttpGET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
};

const imageText = (download_url, id, author) => {
  const wrapperEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const textEl = document.createElement("h3");

  imgEl.src = download_url;
  imgEl.alt = id;
  textEl.textContent = author;

  wrapperEl.append(imgEl, textEl);

  return wrapperEl;
};

onHttpGET("https://picsum.photos/v2/list")
  .then((data) => {
    data.map((data) => {
      document.body.append(imageText(data.download_url, data.id, data.author));
    });
  })
  .catch((error) => {
    console.error("Errore nella richiesta HTTP", error);
  });
