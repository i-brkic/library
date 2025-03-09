// array filled so that the results can be seen
const myLibrary = [
  {
    name: "El túnel",
    author: "Ernesto Sábato",
    releaseDate: "1948",
  },

  {
    name: "Sobre héroes y tumbas",
    author: "Ernesto Sábato",
    releaseDate: "1961",
  },
  {
    name: "Abaddón el exterminador",
    author: "Ernesto Sábato",
    releaseDate: "1974",
  },
];

function Book(name, author, releaseDate) {
  this.name = name;
  this.author = author;
  this.releaseDate = releaseDate;
  this.id = crypto.randomUUID();
}

const body = document.querySelector("body");

function addBookToLibrary() {
  myLibrary.forEach(book => {
    const bookFrame = document.createElement("div");
    bookFrame.innerText = `
    Name: ${book.name} 
    Author: ${book.author} 
    Released: ${book.releaseDate}`;
    bookFrame.classList.add("book");
    body.appendChild(bookFrame);
  });
}

// addBookToLibrary();

//displaying the form after button press

const button = document.querySelector(".button");
const form = document.querySelector(".form");

button.addEventListener("click", function () {
  form.classList.toggle("hidden");
});
