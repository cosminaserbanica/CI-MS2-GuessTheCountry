document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left');
  const startGame = document.querySelector('#start-game');
  const quizModal = document.querySelector('.quiz-modal');
  let timeLeft = 3;

  function countDown(){
    setInterval(function(){
      if (timeLeft <= 0 ) {
        clearInterval(timeLeft = 0)
        timeLeftDisplay.style.display = "none";
        quizModal.style.opacity='1';
        // Another function for random question.
      }
      startGame.style.display = "none";
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -=1
      timeLeftDisplay.classList.add('time-left-animation')
    }, 1000)
  }

  startGame.addEventListener('click', countDown);

})