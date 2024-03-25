require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/users");

mongoose.connect(process.env.DATABASE_URL);

const app = express();

app.use(express.json());
const db = mongoose.connection;

db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connessione stabilita!"));

app.get("/", (req, res, next) => {
  res.send("<h1>HOMEPAGE</h1>");
});

app.get("/users", async (req, res, next) => {
  const users = await User.find();
  res.json(users);
});

app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post("/users", async (req, res, next) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    age: req.body.age,
  });

  try {
    const newUser = await user.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(201).json({ message: "L'utente è stato cancellato" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      const { username, email, password, age } = req.body;
      if (username && email && password && age) {
        user.username = username;
        user.email = email;
        user.password = password;
        user.age = age;

        await user.save();
        res.status(201).json({ message: "L'utente è stato modificato!" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3001);
