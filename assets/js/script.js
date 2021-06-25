const openInstructions = document.getElementById('open-instructions');
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('close-modal2');

openInstructions.addEventListener('click', () => {
  modal2.classList.add('show-modal')
});

closeModal2.addEventListener('click', () => {
  modal2.classList.remove('show-modal')
});

const openContact = document.getElementById('open-contact');
const modal3 = document.getElementById('modal3');
const closeModal3 = document.getElementById('close-modal3');

openContact.addEventListener('click', () => {
  modal3.classList.add('show-modal')
});

closeModal3.addEventListener('click', () => {
  modal3.classList.remove('show-modal')
});

// Close modal by clicking anywhere outside of the modal area
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.classList.remove('show-modal')
  } else if (event.target == modal3) {
    modal3.classList.remove('show-modal')
  } 
}