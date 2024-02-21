const express = require("express");
const app = express();
const path = require("path");
const products = require("./data");
const { log } = require("console");
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

app.get("/catalogo", (req, res) => {
  res.json(products);
});

app.get("/catalogo/:prodottoId", (req, res) => {
  const { prodottoId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(prodottoId)
  );

  if (!singleProduct) {
    return res.status(404).send("articolo non presente");
  }

  return res.json(singleProduct);
});

app.get("/api/prodotti", (req, res) => {
  const { search } = req.query;
  console.log(req.query);
  let filterProduct = [...products];

  if (search) {
    filterProduct = filterProduct.filter((product) => {
      return product.title.toLowerCase().match(search.toLowerCase());
    });
  }

  res.json(filterProduct);
});

app.get("/brands", (req, res) => {
  const uniqueBrandsSet = new Set(products.map((product) => product.brand));
  const uniqueBrandsArray = Array.from(uniqueBrandsSet);

  res.json({ brands: uniqueBrandsArray });
});

app.listen(PORT, () => {
  console.log("server attivo");
});
