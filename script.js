class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayLibrary() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const { title, author, pages, read } = book;

        const titleEl = document.createElement("h3");
        titleEl.textContent = title;
        bookDiv.appendChild(titleEl);

        const authorEl = document.createElement("p");
        authorEl.textContent = `Author: ${author}`;
        bookDiv.appendChild(authorEl);

        const pagesEl = document.createElement("p");
        pagesEl.textContent = `Pages: ${pages}`;
        bookDiv.appendChild(pagesEl);

        const readEl = document.createElement("p");
        readEl.textContent = `Read: ${read}`;
        bookDiv.appendChild(readEl);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayLibrary();
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

    displayLibrary();
});

const exampleBooksBtn = document.getElementById("example-books-btn");
let exampleBooksAdded = false;
exampleBooksBtn.addEventListener("click", () => {
    if (!exampleBooksAdded) {
        const response = confirm("Are you sure you want to add example books?");
        if (response) {
            addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "No");
            addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Yes");
            addBookToLibrary("1984", "George Orwell", 328, "No");
            addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "Yes");
            displayLibrary();
            exampleBooksAdded = true;
            exampleBooksBtn.textContent = "Remove Example Books";
        }
    } else {
        myLibrary.length = 0;
        displayLibrary();
        exampleBooksAdded = false;
        exampleBooksBtn.textContent = "Example Books";
    }
});

displayLibrary();