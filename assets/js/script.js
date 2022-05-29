//Question bank
var questionBank = [
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


var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answer-buttons')




































// var answers
// var randomQuestion
// var questionIndex


// startButton.addEventListener('click', startGame)

// nextButton.addEventListener('click', () => {
//     questionIndex++
//     nextQuestion()
// })

// function startGame() {
//     startButton.classList.add('hide')
//     randomQuestion = questionBank.sort(() => Math.random() - .5)
//     questionIndex = 0
//     questionContainerEl.classList.remove('hide')
//     answerEl.classList.remove('hide')

//     showQuestion()
// };


// function nextQuestion() {
//     resetState()
//     showQuestion(randomQuestion[questionIndex])
// }

// function showQuestion(questionBank) {
//     questionEl.innerText = questionBank[question]
//     questionBank.answers.forEach(answer => {
//         var button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         } questionBank
//         button.addEventListener('click', selectAnswer)
//         answerEl.appendChild(button)
//     })
// }

// function resetState() {
//     clearStatusClass(document.body)
//     nextButton.classList.add('hide')
//     while (answerEl.firstChild) {
//         answerEl.removeChild(answerEl.firstChild)
//     }
// }

// function selectAnswer(e) {
//     var selectedButton = e.target
//     var correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerEl.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (randomQuestion.length > questionIndex + 1) {
//         nextButton.classList.remove('hide')
//     } else {
//         startButton.innerText = 'Restart'
//         startButton.classList.remove('hide')
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }


