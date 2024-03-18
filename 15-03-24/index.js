const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let clients = [
  {
    id: 1,
    nome: "Alice",
    cognome: "Rossi",
    email: "alice.rossi@example.com",
    telefono: "+1234567890",
  },
  {
    id: 2,
    nome: "Bob",
    cognome: "Verdi",
    email: "bob.verdi@example.com",
    telefono: "+1987654321",
  },
  {
    id: 3,
    nome: "Charlie",
    cognome: "Bianchi",
    email: "charlie.bianchi@example.com",
    telefono: "+1122334455",
  },
  {
    id: 4,
    nome: "David",
    cognome: "Neri",
    email: "david.neri@example.com",
    telefono: "+1555098765",
  },
  {
    id: 5,
    nome: "Elena",
    cognome: "Gialli",
    email: "elena.gialli@example.com",
    telefono: "+1440067890",
  },
];

app.get("/", (req, res, next) => {
  res.send("<h1>HOMEPAGE</h1>");
});

app.get("/dashboard", (req, res, next) => {
  res.json(clients);
});

app.get("/dashboard/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const client = clients.find((client) => client.id === id);

  if (!client) {
    res.status(400).send("Non ho trovato il cliente");
  } else {
    res.status(201).send(client);
  }
});

app.post("/dashboard", (req, res, next) => {
  const body = req.body;

  if (body.id && body.nome && body.cognome && body.email && body.telefono) {
    clients.push(body);
    res.status(201).send("Il cliente è stato correttamente aggiunto");
  } else {
    res.status(400).send(`Parametri non corretti`);
  }
});

app.delete("/dashboard/:id", (req, res, next) => {
  const id = Number(req.params.id);

  clients = clients.filter((client) => client.id !== id);
  res.send("Il cliente è stato rimosso!");
});

app.put("/dashboard/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const body = req.body;
  const index = clients.findIndex((client) => client.id === id);

  if (index === -1) {
    res.status(400).send("Non ho trovato il cliente");
  } else {
    clients[index] = body;
    res.send("I dati del cliente sono stati modificati!");
  }
});

app.listen(PORT);
