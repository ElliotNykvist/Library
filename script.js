  const showModalButton = document.getElementById('add-book');
  const formModal = document.querySelector('.form');
  const closeModal = formModal.querySelector('.close-modal');
  const submitButton = document.querySelector(".submit")

  showModalButton.addEventListener('click', () => {
    formModal.classList.add('active'); // Show the form by adding the 'active' class
  });

  closeModal.addEventListener('click', () => {
    formModal.classList.remove('active'); // Hide the form by removing the 'active' class
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === formModal) {
      formModal.classList.remove('active'); // Hide the form by removing the 'active' class
    }
  });


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages
  this.read = read
  // the constructor...
}

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;


  const book = new Book(title, author, pages, read)

  myLibrary.push(book);

  displayLibrary() 
  
}

function displayLibrary(){
  const library = document.querySelector(".library");
  library.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");


    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookTitle.classList.add("book-title");

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${book.author}`;
    bookAuthor.classList.add("book-author");

    const bookPages = document.createElement("p");
    bookPages.textContent = `Pages: ${book.pages}`;
    bookPages.classList.add("book-pages");

    const bookRead = document.createElement("p");
    bookRead.textContent = book.read ? "Read" : "Not Read";
    bookRead.classList.add("book-read")

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayLibrary();

    });

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteButton);

    library.appendChild(bookCard);
  });

}

submitButton.addEventListener("click", addBookToLibrary);
displayLibrary();


