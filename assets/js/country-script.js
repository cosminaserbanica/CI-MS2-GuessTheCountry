document.addEventListener('DOMContentLoaded', countDown);


const navBar = document.querySelector('.navbar'); //VARIABLE FOR NAVBAR
const footerGame = document.querySelector('.footer-game');//VARIABLE FOR FOOTER
const quizBg = document.querySelector('.quiz-bg');//VARIABLE FOR BACKGROUND IMAGE ON QUIZ PAGE

const timeLeftDisplay = document.querySelector('#time-left');//VARIABLE FOR COUNTDOWN
const quizModal = document.querySelector('.quiz-modal');//VARIABLE FOR MODAL CONTAINING THE QUIZ
const quizMap = document.querySelector('#Europe');//VARIABLE FOR MAP
const questionTime = document.querySelector('#question-timer'); //VARIABLE FOR QUESTION TIMER
const endModal = document.querySelector('.end-modal');//VARIABLE FOR GAME OVER MODAL WHICH POPS UP AT THE END OF GAME

const soundToggle = document.querySelector('#sound-toggle-btn') //VARIABLE FOR SOUND TOGGLE

//VARIABLES FOR AUDIO
const click = document.querySelector('#click-sound');
const correct = document.querySelector('#correct-sound');
const wrong = document.querySelector('#wrong-sound');

//FUNCTIONS FOR CONTROLING SOUND- TOGGLE
function toggleSound () {
  if(soundToggle.classList.contains('fa-volume-up')) {
    muteOn();        
  } else if (soundToggle.classList.contains('fa-volume-mute')) {
    muteOff();
  }
}

function muteOn() {
  soundToggle.classList.remove('fa-volume-up');
  soundToggle.classList.add('fa-volume-mute');
  click.muted = true;
  correct.muted = true;
  wrong.muted = true;
}

function muteOff() {
  soundToggle.classList.remove('fa-volume-mute');
  soundToggle.classList.add('fa-volume-up');
  click.muted = false;
  correct.muted = false;
  wrong.muted = false;
}

let timeLeft = 3;
let countDownTimer; //NAME FOR INTERVAL USED FOR COUNTDOWN BEFORE STARTING GAME

//FUNCTION FOR INTERVAL USED FOR COUNTDOWN BEFORE STARTING GAME- CODE SOURCED AND EDITED FROM https://www.youtube.com/watch?v=vSV_Ml2_A88
function countDown(){
  countDownTimer = setInterval(function(){
    if (timeLeft <= 0 ) {
      clearInterval(countDownTimer);
      timeLeft = 1;
      timeLeftDisplay.style.display = "none";
      navBar.style.opacity='1';
      quizModal.style.opacity='1';
      quizMap.style.opacity='1';
      footerGame.style.opacity='1';
      quizBg.style.opacity='1';
    }
    timeLeftDisplay.innerHTML = timeLeft
    timeLeft -=1
    timeLeftDisplay.classList.add('time-left-animation')
  }, 1000)
  setTimeout(() => questionTimer(5), 3000);
}

let resetTimer = "False";
let eachQuestionTimer;//VARIABLE FOR QUESTION TIMER

//FUNCTION FOR QUESTION TIMER
function questionTimer(timeLeft){
  eachQuestionTimer = setInterval(function(){
    if (resetTimer === "True") {
      clearInterval(timeLeft = 5)
      resetTimer = "False"
    } else if (timeLeft < 0){
      clearInterval(timeLeft = 5)
      document.querySelector('#' + currentQuestion.id).style.fill = "red";
      wrong.play();
      questionInfo.innerHTML = "Question " + questionCounter + " of 42";
      getNewQuestion();
    }
    questionTime.innerHTML = "00:0" + timeLeft
    timeLeft -=1
  }, 1000)
}

// GAME FUNCTION VARIABLES- CODE SOURCED AND EDITED FROM https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let guessedCountries = 0;

//DATA FROM JSON FILE

let questionsList = [
  {
    "id": "Vector_1",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "United Kingdom",
    "answer2": "Ireland",
    "answer3": "Iceland",
    "answer4": "France"
  },

  {
    "id": "Vector_2",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Norway",
    "answer2": "Denmark",
    "answer3": "Sweden",
    "answer4": "Finland"
  },

  {
    "id": "Vector_3",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Belarus",
    "answer2": "Ukraine",
    "answer3": "Slovenia",
    "answer4": "Romania"
  },

  {
    "id": "Vector_4",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Croatia",
    "answer2": "Hungary",
    "answer3": "Serbia",
    "answer4": "Slovenia"
  },

  {
    "id": "Vector_5",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Slovakia",
    "answer2": "Albania",
    "answer3": "Austria",
    "answer4": "Croatia"
  },

  {
    "id": "Vector_6",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Greece",
    "answer2": "North Macedonia",
    "answer3": "Bulgaria",
    "answer4": "Albania"
  },

  {
    "id": "Vector_7",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Turkey",
    "answer2": "Greece",
    "answer3": "Cyprus",
    "answer4": "Italy"
  },

  {
    "id": "Vector_8",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Serbia",
    "answer2": "Slovenia",
    "answer3": "Albania",
    "answer4": "Ukraine"
  },

  {
    "id": "Vector_9",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Ukraine",
    "answer2": "Romania",
    "answer3": "Austria",
    "answer4": "Republic of Moldova"
  },

  {
    "id": "Vector_10",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Serbia",
    "answer2": "Montenegro",
    "answer3": "Bulgaria",
    "answer4": "Hungary"
  },

  {
    "id": "Vector_11",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Portugal",
    "answer2": "Spain",
    "answer3": "France",
    "answer4": "Belgium"
  },

  {
    "id": "Vector_12",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "United Kingdom",
    "answer2": "Ireland",
    "answer3": "Iceland",
    "answer4": "Denmark"
  },
  
  {
    "id": "Vector_13",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Switzerland",
    "answer2": "Liechtenstein",
    "answer3": "Italy",
    "answer4": "Austria"
  },

  {
    "id": "Vector_14",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Czech Republic",
    "answer2": "Austria",
    "answer3": "Liechtenstein",
    "answer4": "Switzerland"
  },

  {
    "id": "Vector_15",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Albania",
    "answer2": "Italy",
    "answer3": "Croatia",
    "answer4": "France"
  },

  {
    "id": "Vector_16",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Lithuania",
    "answer2": "Croatia",
    "answer3": "Albania",
    "answer4": "Montenegro"
  },

  {
    "id": "Vector_17",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Estonia",
    "answer2": "Ireland",
    "answer3": "Iceland",
    "answer4": "Germany"
  },

  {
    "id": "Vector_18",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Latvia",
    "answer2": "Estonia",
    "answer3": "Lithuania",
    "answer4": "Denmark"
  },

  {
    "id": "Vector_19",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Belgium",
    "answer2": "Luxembourg",
    "answer3": "Liechtenstein",
    "answer4": "Andorra"
  },

  {
    "id": "Vector_20",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Switzerland",
    "answer2": "Czech Republic",
    "answer3": "Austria",
    "answer4": "France"
  },

  {
    "id": "Vector_21",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Hungary",
    "answer2": "Albania",
    "answer3": "Kosovo",
    "answer4": "Bulgaria"
  },

  {
    "id": "Vector_22",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Poland",
    "answer2": "Belarus",
    "answer3": "Latvia",
    "answer4": "Germany"
  },

  {
    "id": "Vector_23",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Bulgaria",
    "answer2": "Ukraine",
    "answer3": "Romania",
    "answer4": "Hungary"
  },

  {
    "id": "Vector_24",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Netherlands",
    "answer2": "Luxembourg",
    "answer3": "Belgium",
    "answer4": "France"
  },

  {
    "id": "Vector_25",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Latvia",
    "answer2": "Lithuania",
    "answer3": "Estonia",
    "answer4": "Poland"
  },

  {
    "id": "Vector_26",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Latvia",
    "answer2": "Lithuania",
    "answer3": "Estonia",
    "answer4": "Belarus"
  },

  {
    "id": "Vector_27",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Andorra",
    "answer2": "Luxembourg",
    "answer3": "Austria",
    "answer4": "Liechtenstein"
  },

  {
    "id": "Vector_28",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Cyprus",
    "answer2": "Turkey",
    "answer3": "Greece",
    "answer4": "Romania"
  },

  {
    "id": "Vector_29",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Latvia",
    "answer2": "Sweden",
    "answer3": "Norway",
    "answer4": "Finland"
  },

  {
    "id": "Vector_30",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "United Kingdom",
    "answer2": "Portugal",
    "answer3": "Spain",
    "answer4": "Italy"
  },

  {
    "id": "Vector_31",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Netherlands",
    "answer2": "Denmark",
    "answer3": "Belgium",
    "answer4": "Greece"
  },

  {
    "id": "Vector_32",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Albania",
    "answer2": "Greece",
    "answer3": "Cyprus",
    "answer4": "Turkey"
  },

  {
    "id": "Vector_33",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Belarus",
    "answer2": "Latvia",
    "answer3": "Poland",
    "answer4": "Ukraine"
  },

  {
    "id": "Vector_34",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Finland",
    "answer2": "Norway",
    "answer3": "Sweden",
    "answer4": "Denmark"
  },

  {
    "id": "Vector_35",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Romania",
    "answer2": "Hungary",
    "answer3": "Czech Republic",
    "answer4": "Bulgaria"
  },

  {
    "id": "Vector_36",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 3,
    "answer1": "Kosovo",
    "answer2": "Albania",
    "answer3": "Bosnia and Hertzegovina",
    "answer4": "Serbia"
  },

  {
    "id": "Vector_37",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Poland",
    "answer2": "Germany",
    "answer3": "Belarus",
    "answer4": "Denmark"
  },

  {
    "id": "Vector_38",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Serbia",
    "answer2": "Greece",
    "answer3": "Albania",
    "answer4": "Croatia"
  },

  {
    "id": "Vector_39",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Belgium",
    "answer2": "Denmark",
    "answer3": "France",
    "answer4": "Finland"
  },

  {
    "id": "Vector_40",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 1,
    "answer1": "Bulgaria",
    "answer2": "Austria",
    "answer3": "Romania",
    "answer4": "Albania"
  },

  {
    "id": "Vector_41",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 4,
    "answer1": "Poland",
    "answer2": "Spain",
    "answer3": "Germany",
    "answer4": "France"
  },

  {
    "id": "Vector_42",
    "question": "The country highlighted in yellow is:",
    "correctAnswer": 2,
    "answer1": "Netherlands",
    "answer2": "Belgium",
    "answer3": "Germany",
    "answer4": "France"
  }
]

const CORRECT_BONUS = 10; // HOW MUCH A CORRECT ANSWER IS
const MAX_QUESTIONS = 42; //HOW MANY QUESTIONS UNTIL END OF GAME

//PLAY GAME FUNCTION
playGame = () => {
  questionCounter = 1;
  score = 0;
  availableQuestions = [...questionsList];
  getNewQuestion();
};

//GETTING NEW QUESTION
getNewQuestion = () => {
  //END OF GAME
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
    quizModal.style.opacity= '0';
    quizModal.style.pointerEvents= 'none';
    endModal.style.opacity='1';
    endModal.style.pointerEvents= 'all';
    clearInterval(countDownTimer);
    clearInterval(eachQuestionTimer);
    return;
  }
  questionCounter++;//INCREMENT TO 1
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);//AMOUNT EQUAL TO HOW MANY QUESTIONS ARE LEFT FROM ARRAY
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  document.querySelector('#' + currentQuestion.id).style.fill = "yellow";//TURN CURRENT VECTOR TO YELLOW

  answers.forEach(answer => {//ITERATE THROUGH ANSWERS
    const number = answer.dataset["number"];
    answer.innerText = currentQuestion["answer" + number];
  });
  
  availableQuestions.splice(questionIndex, 1); //REMOVE USED QUESTION

  acceptingAnswers = true;//ALLOW USER TO ANSWER
};

// VARIABLES FOR DISPLAYING SCORE, CURRENT QUESTION NUMBER AND END OF GAME MESSAGE
let userScore = document.querySelector('.user-score');
let questionInfo = document.querySelector('.current-question');
let endMessage = document.querySelector('#end-game-message');

//LISTEN FOR USER ANSWER
answers.forEach(answer => {
  answer.addEventListener('click', e => {
    click.play();//PLAY CLICK SOUND WHEN CLICK
    if(!acceptingAnswers) return; //IGNORE IF NOT READY

    acceptingAnswers = "false";

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];//MATCHES CORRECT ANSWER BASED ON NUMBER
    if (selectedAnswer == currentQuestion.correctAnswer) {

      score = score + CORRECT_BONUS; //UPDATES USER SCORE
      userScore.innerHTML = "Score: " + score;//DISPLAYS USER SCORE
      correct.play();//PLAYS CORRECT SOUND
      document.querySelector('#' + currentQuestion.id).style.fill = "green";//TURNS COUNTRY TO GREEN FOR CORRECT ANSWER
      guessedCountries = guessedCountries + 1;//INCREMENTS NUMBER OF CORRECT ANSWERS TO 1
    }else{
      wrong.play();//PLAYS WRONG SOUND
      document.querySelector('#' + currentQuestion.id).style.fill = "red";//TURNS COUNTRY TO RED FOR WRONG ANSWER
    }
    questionInfo.innerHTML = "Question " + questionCounter + " of 42";
    endMessage.innerHTML = "You correctly guessed " + guessedCountries + " countries out of " + MAX_QUESTIONS + "!"
    getNewQuestion(); 
    resetTimer = "True";
  })
})

//CALLS THE PLAY GAME FUNCTION
playGame();