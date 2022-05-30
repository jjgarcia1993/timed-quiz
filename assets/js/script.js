//Question bank
const questionBank = [
    {
        question: 'Which planet in our solar system is the smallest?',
        answers: [
            'Earth',
            'Venus',
            'Pluto',
            'Mercury'
        ],
        correct: "Mercury"
    },
    {
        question: 'Titan is the name of a moon that orbits which planet?',
        answers: [
            'Saturn',
            'Jupiter',
            'Uranus',
            'Earth'
        ],
        correct: "Saturn"
    },
    {
        question: 'What protects Earth from meteoroids and radiation?',
        answers: [
            'The Atmosphere',
            'The Moon',
            'The Sun',
            'The Asteroid Belt'
        ],
        correct: "The Atmosphere"
    },
    {
        question: 'How many of our planets can be seen without a telescope?',
        answers: [
            '3',
            '7',
            '2',
            '5'
        ],
        correct: "5"
    },
    {
        question: 'How long is one year on Jupiter?',
        answers: [
            '5 Earth Years',
            '12 Earth Years',
            '27 Earth Years',
            '62 Earth Years'
        ],
        correct: "12 Earth Years"
    },
    {
        question: 'How many moons does Earth have?',
        answers: [
            '2',
            '3',
            '1',
            '1.5'
        ],
        correct: "1"
    },
    {
        question: 'How old is the sun?',
        answers: [
            '10 million years',
            '878 billion years',
            '3 billion years',
            '4.6 billion years'
        ],
        correct: "4.6 billion years"
    },
    {
        question: 'How many moons are currently in our solar system?',
        answers: [
            '181',
            '67',
            '677',
            '210'
        ],
        correct: "181"
    },
    {
        question: 'How long does it take the suns rays to reach Earth?',
        answers: [
            '3 days',
            '1 week',
            'A few hours',
            'Eight minutes'
        ],
        correct: "Eight minutes"
    },
    {
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


var arrayEl = [

]


// console.log(questionBank, questionIndex.correct);

// references
const startButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerEl = document.getElementById('answer-buttons')



var questionIndex = 0
var currentQuestion
var shuffledQuestions

var score = 0
// save score
var saveScore = function () {
    localStorage.setItem('score', score)
}

// start quiz function
function startQuiz() {
    startButton.classList.add('hide')
    answerEl.classList.remove('hide')
    showQuestions()
    getAnswers()
}


// start button listener
startButton.addEventListener('click', startQuiz)

// select answer listener
answerEl.addEventListener('click', selectAnswer)



// show question function
function showQuestions() {
    // get random question
    const randomQuestion = questionBank[questionIndex].question; {
        questionEl.innerText = randomQuestion
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
    buttonOne.setAttribute("correct-answer", questionBank[questionIndex].answers[0])
    buttonTwo.setAttribute("correct-answer", questionBank[questionIndex].answers[1])
    buttonThree.setAttribute("correct-answer", questionBank[questionIndex].answers[2])
    buttonFour.setAttribute("correct-answer", questionBank[questionIndex].answers[3])
}

function selectAnswer(event) {
    const selectedButton = event.target
    if (selectedButton.matches("button[correct-answer = '" + questionBank[questionIndex].correct + "']")) {
        saveScore(score++)
        questionIndex++
        if (questionIndex < 10) {
            showQuestions();
            getAnswers();
        }
        else {
            goToScore()
        }
        console.log(score)
    }
    else {
        console.log('Incorrect')
    }
}



function goToScore() {

}