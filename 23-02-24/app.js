const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const authorization = require("./authorization");

const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/public/index.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/mostra-dati", (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Benvenuto ${name}`);
  }
  res.status(400).send("per favore aggiungi i dati");
});

app.get("/dashboard", authorization, (req, res) => {
  res.send("Dashboard");
});

app.listen(PORT, () => {
  console.log("server attivo");
});
