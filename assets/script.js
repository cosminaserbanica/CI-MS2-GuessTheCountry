const openPlay = document.getElementById('open-play');
const modal1 = document.getElementById('modal1');
const closeModal1 = document.getElementById('close-modal1');

openPlay.addEventListener('click', () => {
  modal1.classList.add('show-modal1')
});

closeModal1.addEventListener('click', () => {
  modal1.classList.remove('show-modal1')
});