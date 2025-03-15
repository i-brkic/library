const myLibrary = [];

function Book(name, author, releaseDate) {
  this.name = name;
  this.author = author;
  this.releaseDate = releaseDate;
  this.id = crypto.randomUUID();
}

const list = document.querySelector(".book-list");

function addBookToLibrary() {
  myLibrary.forEach(book => {
    if (!document.getElementById(book.id)) {
      const nesto = document.getElementById(book.id);
      console.log(nesto);
      const bookFrame = document.createElement("div");
      bookFrame.innerText = `
      Name: ${book.name} 
      Author: ${book.author} 
      Released: ${book.releaseDate}`;
      bookFrame.classList.add("book");
      bookFrame.id = book.id;
      list.appendChild(bookFrame);
    }
  });
}

const button = document.querySelector(".button");
const form = document.querySelector(".form");

button.addEventListener("click", function () {
  form.classList.toggle("hidden");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const BookData = new Book(
    form.name.value,
    form.author.value,
    form.releaseYear.value
  );

  myLibrary.push(BookData);

  addBookToLibrary();

  form.reset();
});
