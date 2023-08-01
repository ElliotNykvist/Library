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

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  
}