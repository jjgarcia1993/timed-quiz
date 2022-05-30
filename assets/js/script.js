//Question bank
const questionBank = [
    numberOne = {
        question: 'Which planet in our solar system is the smallest?',
        answers: [
            'Earth',
            'Venus',
            'Pluto',
            'Mercury'
        ],
        correct: "Mercury"
    },
    numberTwo = {
        question: 'Titan is the name of a moon that orbits which planet?',
        answers: [
            'Saturn',
            'Jupiter',
            'Uranus',
            'Earth'
        ],
        correct: "Saturn"
    },
    numberThree = {
        question: 'What protects Earth from meteoroids and radiation?',
        answers: [
            'The Atmosphere',
            'The Moon',
            'The Sun',
            'The Asteroid Belt'
        ],
        correct: "The Atmosphere"
    },
    numberFour = {
        question: 'How many of our planets can be seen without a telescope?',
        answers: [
            '3',
            '7',
            '2',
            '5'
        ],
        correct: "5"
    },
    numberFive = {
        question: 'How long is one year on Jupiter?',
        answers: [
            '5 Earth Years',
            '12 Earth Years',
            '27 Earth Years',
            '62 Earth Years'
        ],
        correct: "12 Earth Years"
    },
    numberSix = {
        question: 'How many moons does Earth have?',
        answers: [
            '2',
            '3',
            '1',
            '1.5'
        ],
        correct: "1"
    },
    numberSeven = {
        question: 'How old is the sun?',
        answers: [
            '10 million years',
            '878 billion years',
            '3 billion years',
            '4.6 billion years'
        ],
        correct: "4.6 billion years"
    },
    numberEight = {
        question: 'How many moons are currently in our solar system?',
        answers: [
            '181',
            '67',
            '677',
            '210'
        ],
        correct: "181"
    },
    numberNine = {
        question: 'How long does it take the suns rays to reach Earth?',
        answers: [
            '3 days',
            '1 week',
            'A few hours',
            'Eight minutes'
        ],
        correct: "Eight minutes"
    },
    numberTen = {
        question: 'Who was the first person to walk on the moon?',
        answers: [
            'Lance Armstrong',
            'Shaquille ONeal',
            'Neil Armstrong',
            'Louis Armstrong'
        ],
        correct: "Neil Armstrong"
    },
]


// console.log(questionBank, questionIndex.correct);

// references
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer-buttons')

var questionIndex = 0
var currentQuestion
var shuffledQuestions

// start quiz function
function startQuiz() {
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
    answerEl.classList.remove('hide')
    showQuestions()
    getAnswers()
}


// start button listener
startButton.addEventListener('click', startQuiz)

// next button listener
nextButton.addEventListener('click', setNextQuestion)


// next question function
function setNextQuestion() {
    showQuestions();
    getAnswers();
    questionIndex++
    if (questionIndex === 10) {
        goToScore();
    }
}


// show question function
function showQuestions() {
    // get random question
    const randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)]; {
        questionEl.innerText = randomQuestion.question
    }
}

// get answers
function getAnswers() {
    var buttonOne = document.querySelector('.btn1');
    var buttonTwo = document.querySelector('.btn2');
    var buttonThree = document.querySelector('.btn3');
    var buttonFour = document.querySelector('.btn4');
    buttonOne.textContent = questionBank[questionIndex].answers[0]
    buttonTwo.textContent = questionBank[questionIndex].answers[1]
    buttonThree.textContent = questionBank[questionIndex].answers[2]
    buttonFour.textContent = questionBank[questionIndex].answers[3]
}

function selectAnswer(answerEl) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > questionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}



// show answer function
function showAnswers() {
    answerEl.btn1.innerText = randomAnswer
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function goToScore() {

}




