  const showModalButton = document.getElementById('add-book');
  const formModal = document.querySelector('.form');
  const closeModal = formModal.querySelector('.close-modal');

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
  const read = document.getElementById("read").value;


  const book = new Book(title, author, pages, read)

  myLibrary.push(book);

  displayLibrary() 
  
}