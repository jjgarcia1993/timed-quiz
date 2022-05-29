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
            { text: 'The Atmosphere', correct: true },
            { text: 'The Moon', correct: false },
            { text: 'The Sun', correct: false },
            { text: 'The Asteroid Belt', correct: false }
        ]
    },
    {
        question: 'How many of our planets can be seen without a telescope?',
        answers: [
            { text: '3', correct: false },
            { text: '7', correct: false },
            { text: '2', correct: false },
            { text: '5', correct: true }
        ]
    },
    {
        question: 'How long is one year on Jupiter?',
        answers: [
            { text: '5 Earth Years', correct: false },
            { text: '12 Earth Years', correct: true },
            { text: '27 Earth Years', correct: false },
            { text: '62 Earth Years', correct: false }
        ]
    },
    {
        question: 'How many moons does Earth have?',
        answers: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '1', correct: true },
            { text: '1.5', correct: false }
        ]
    },
    {
        question: 'How old is the sun?',
        answers: [
            { text: '10 million years', correct: false },
            { text: '878 billion years', correct: false },
            { text: '3 billion years', correct: false },
            { text: '4.6 billion years', correct: true }
        ]
    },
    {
        question: 'How many moons are currently in our solar system?',
        answers: [
            { text: '181', correct: true },
            { text: '67', correct: false },
            { text: '677', correct: false },
            { text: '210', correct: false }
        ]
    },
    {
        question: 'How long does it take the suns rays to reach Earth?',
        answers: [
            { text: '3 days', correct: false },
            { text: '1 week', correct: false },
            { text: 'A few hours', correct: false },
            { text: 'Eight minutes', correct: true }
        ]
    },
    {
        question: 'Who was the first person to walk on the moon?',
        answers: [
            { text: 'Lance Armstrong', correct: false },
            { text: 'Shaquille ONeal', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Louis Armstrong', correct: false }
        ]
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


