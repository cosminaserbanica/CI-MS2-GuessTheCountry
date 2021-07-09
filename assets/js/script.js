const openInstructions = document.getElementById('open-instructions'); //MODAL FOR INSTRUCTIONS- CODE SOURCED AND EDITED FROM https://www.youtube.com/watch?v=XH5OW46yO8I
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('close-modal2');

openInstructions.addEventListener('click', () => {
  modal2.classList.add('show-modal')
});

closeModal2.addEventListener('click', () => {
  modal2.classList.remove('show-modal')
});

const openContact = document.getElementById('open-contact'); //MODAL FOR CONTACT FORM - CODE SOURCED AND EDITED FROM https://www.youtube.com/watch?v=XH5OW46yO8I
const modal3 = document.getElementById('modal3');
const closeModal3 = document.getElementById('close-modal3');

openContact.addEventListener('click', () => {
  modal3.classList.add('show-modal')
});

closeModal3.addEventListener('click', () => {
  modal3.classList.remove('show-modal')
});

// CLOSE MODAL BY CLICKING OUTSIDE THE MODAL AREA
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.classList.remove('show-modal')
  } else if (event.target == modal3) {
    modal3.classList.remove('show-modal')
  } 
}