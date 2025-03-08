const myLibrary = [
  {
    name: "El túnel",
    author: "Ernesto Sábato",
    releaseDate: 1948,
  },

  {
    name: "Sobre héroes y tumbas",
    author: "Ernesto Sábato",
    releaseDate: 1961,
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
    body.appendChild(bookFrame);
  });
}

addBookToLibrary();
