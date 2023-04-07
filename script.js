let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = prompt("Enter the book's title:");
    const author = prompt("Enter the book's author:");
    const pages = prompt("Enter the number of pages:");
    const read = prompt("Have you read this book? (yes or no)");

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const title = document.createElement("h3");
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;
        bookDiv.appendChild(author);

        const pages = document.createElement("p");
        pages.textContent = "Pages: " + book.pages;
        bookDiv.appendChild(pages);

        const read = document.createElement("p");
        read.textContent = "Read: " + book.read;
        bookDiv.appendChild(read);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
        bookDiv.appendChild(removeBtn);

        bookList.appendChild(bookDiv);
    }
}

const newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", () => {
    const form = document.getElementById("new-book-form");
    form.style.display = "block";
});

const submitBtn = document.querySelector("form button");
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked ? "Yes" : "No";

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    const form = document.getElementById("new-book-form");
    form.style.display = "none";

    displayBooks();
});

displayBooks();