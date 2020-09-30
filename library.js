const tableDOM = document.querySelector("tbody");

// Add 2 initial books
const hobbit = new Book("The Hobbit", "Tolkien", 500, true);
const ring = new Book("The ring", "Ananda", 300, false);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let myLibrary = [hobbit, ring];

function renderTable() {
  // reset table
  tableDOM.innerHTML = "";

  myLibrary.forEach((book, idx) => {
    const tdElem = document.createElement("td");
    const trElem = document.createElement("tr");

    const propertyName = ["title", "author", "pages", "isRead"];
    propertyName.forEach((property) => {
      // for each property, make a td element and append to the tr element
      tdElem.textContent = book[property];
      trElem.appendChild(tdElem.cloneNode(true));
    });

    // creating the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("data-index", idx);
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");

    // inserting the delete button to the td element
    tdElem.innerHTML = "";
    tdElem.classList.add("text-center");
    tdElem.appendChild(deleteButton);
    trElem.appendChild(tdElem);
    tableDOM.appendChild(trElem);
  });
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  renderTable();
}
