const openPlay = document.getElementById('open-play');
const modal1 = document.getElementById('modal1');
const closeModal1 = document.getElementById('close-modal1');

openPlay.addEventListener('click', () => {
  modal1.classList.add('show-modal')
});

closeModal1.addEventListener('click', () => {
  modal1.classList.remove('show-modal')
});

const openInstructions = document.getElementById('open-instructions');
const modal2 = document.getElementById('modal2');
const closeModal2 = document.getElementById('close-modal2');

openInstructions.addEventListener('click', () => {
  modal2.classList.add('show-modal')
});

closeModal2.addEventListener('click', () => {
  modal2.classList.remove('show-modal')
});