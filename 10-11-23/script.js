// const headEl = document.createElement("div");
// const textEl = document.createElement("div");
// const titleEl = document.createElement("h1");
// const paragraphEl = document.createElement("p");
// const buttonEl = document.createElement("button");

// headEl.setAttribute("class", "hero-image");
// textEl.setAttribute("class", "hero-text");
// buttonEl.setAttribute("class", "button-image");

// headEl.appendChild(textEl);

// textEl.appendChild(titleEl);
// textEl.appendChild(paragraphEl);
// textEl.appendChild(buttonEl);

// titleEl.textContent = "Lorem, ipsum.";
// paragraphEl.textContent =
//   "Lorem ipsum, dolor sit amet consectetur adipisicing elit";
// buttonEl.textContent = "Clicca qui!";

// document.body.append(headEl);

// // 2 esercizio

// buttonEl.addEventListener("click", () => {
//   headEl.style.display = "none";
// });

// 3 esercizio

const wrapperEl = document.createElement("div");
const imgGallery = document.createElement("div");
const titleGallery = document.createElement("h1");
titleGallery.textContent = "This is a gallery";

wrapperEl.setAttribute("class", "gallery");
imgGallery.setAttribute("class", "image-gallery");
titleGallery.setAttribute("class", "title");

document.body.append(wrapperEl);
wrapperEl.appendChild(imgGallery);
wrapperEl.appendChild(titleGallery);

const imageGenerator = (gallery, imgURl, textContent) => {
  const generatedImage = document.createElement("img");
  generatedImage.setAttribute("id", gallery);
  generatedImage.setAttribute("src", imgURl);
  generatedImage.setAttribute("alt", textContent);
  generatedImage.setAttribute("class", "img-gallery");
  generatedImage.setAttribute("vspace", "20");
  generatedImage.setAttribute("hspace", "20");

  return generatedImage;
};

imgGallery.append(
  imageGenerator(1, "https://picsum.photos/id/49/300/300", "any")
);

imgGallery.append(
  imageGenerator(2, "https://picsum.photos/id/51/300/300", "any")
);

imgGallery.append(
  imageGenerator(3, "https://picsum.photos/id/50/300/300", "any")
);

imgGallery.append(
  imageGenerator(4, "https://picsum.photos/id/58/300/300", "any")
);

imgGallery.append(
  imageGenerator(4, "https://picsum.photos/id/42/300/300", "any")
);

imgGallery.append(
  imageGenerator(4, "https://picsum.photos/id/56/300/300", "any")
);
