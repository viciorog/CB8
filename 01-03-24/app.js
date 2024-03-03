const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const users = require("./data");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/endpoint", (req, res) => {
  res.render("endpoint");
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
  res.render("users", { users: users });
});

app.get("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const singleUser = users.find((user) => user.id === Number(userId));

  if (!singleUser) {
    return res.status(404).send("utente non presente");
  }

  return res.render("singleUser", { singleUser: singleUser });
});

app.put("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { firstname, lastname } = req.body;
  const user = users.find((user) => user.id === Number(userId));

  if (!user) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessun utente con id: ${userId}` });
  }

  if (firstname !== undefined) {
    user.firstname = firstname;
  }

  if (lastname !== undefined) {
    user.lastname = lastname;
  }
  return res.status(200).json({ success: true, data: user });
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const userIndex = users.findIndex((user) => user.id === Number(userId));

  if (userIndex === -1) {
    return res
      .status(404)
      .json({ success: false, msg: `Utente non presente con id: ${userId}` });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  return res.status(200).json({ success: true, data: deletedUser });
});

app.listen(port);
