const tableDOM = document.querySelector("tbody");

const hobbit = new Book("The Hobbit", "Tolkien", 500, true);
const ring = new Book("The ring", "Ananda", 300, false);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      isRead ? "already read" : "not read yet"
    }`;
  };
}

let myLibrary = [hobbit, ring];

myLibrary.forEach((book) => {
  const tdElem = document.createElement("td");
  const trElem = document.createElement("tr");

  const propertyName = ["title", "author", "pages", "isRead"];
  propertyName.forEach((property) => {
    tdElem.textContent = book[property];
    trElem.appendChild(tdElem.cloneNode(true));
  });
  tableDOM.appendChild(trElem);
});

function addBookToLibrary() {}
