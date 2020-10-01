// jshint esversion:6
const tableDOM = document.querySelector("tbody");

// Add 2 initial books
window.onload = function () {
  addBookToLibrary("Cloud Atlas", "David Mitchell", "544", 1);
  addBookToLibrary("World War Z", "Max Brooks", "342", 0);
};


function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

let myLibrary = [];

function renderTable() {
  // reset table
  tableDOM.innerHTML = "";

  myLibrary.forEach((book, idx) => {
    const tdElem = document.createElement("td");
    const trElem = document.createElement("tr");

    const propertyName = ["title", "author", "pages"];
    propertyName.forEach((property) => {
      // for each property, make a td element and append to the tr element
      tdElem.textContent = book[property];
      trElem.appendChild(tdElem.cloneNode(true));
    });

    tdElem.textContent = book["isRead"] ? "Read" : "Not Read";
    trElem.appendChild(tdElem.cloneNode(true));

    // creating the switch button
    const switchButton = document.createElement("button");
    switchButton.textContent = "Switch";
    switchButton.setAttribute("type", "button");
    switchButton.setAttribute("onclick", `switchStatus(${idx})`);
    switchButton.classList.add("btn", "btn-primary", "btn-sm", "mr-2");

    // creating the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("onclick", `deleteBook(${idx})`);
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");

    // inserting the delete button to the td element
    tdElem.innerHTML = "";
    tdElem.classList.add("text-center");
    tdElem.appendChild(switchButton);
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

function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderTable();
}

function switchStatus(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  renderTable();
}