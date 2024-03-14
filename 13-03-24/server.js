const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

books = [
  { title: "Il signore degli anelli", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Il conte di Montecristo", author: "Alexandre Dumas" },
  { title: "Orgoglio e pregiudizio", author: "Jane Austen" },
  { title: "Cime tempestose", author: "Emily Brontë" },
  { title: "Il nome della rosa", author: "Umberto Eco" },
  { title: "Cronache del ghiaccio e del fuoco", author: "George R.R. Martin" },
  { title: "Harry Potter e la pietra filosofale", author: "J.K. Rowling" },
  { title: "Il grande Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Guerra e pace", author: "Lev Tolstoj" },
];

// app.use("/", (req, res) => {
//   res.send(`<h1>HomePage!</h1>`);
// });

app.get("/add-books", (req, res) => {
  res.send(`
    <form action="/books" method="POST">
     <input type="text" placeholder="Titolo..." name="title"/>
     <input type="text" placeholder="Autore..." name="author"/>
     <input type="submit" />
    </form>
    `);
});

app.post("/books", (req, res) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.send(books);
});

app.listen(3001);
