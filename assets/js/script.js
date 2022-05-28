//Question bank
var questionBank = [
    {
        question: 'Which planet in our solar system is the smallest?',
        response: ['Earth', 'Venus', 'Pluto', 'Mercury'],
        answer: 'Mercury'
    },
    {
        question: 'Titan is the name of a moon that orbits which planet?',
        response: ['Saturn', 'Jupiter', 'Uranus', 'Earth'],
        answer: 'Saturn'
    },
    {
        question: 'What protects Earth from meteoroids and radiation?',
        response: ['The Atmosphere', 'The Moon', 'The Sun', 'The Asteroid Belt'],
        answer: 'The Atmosphere'
    },
    {
        question: 'How many of our planets can be seen without a telescope?',
        response: ['3', '7', '2', '5'],
        answer: '5'
    },
    {
        question: 'How long is one year on Jupiter?',
        response: ['5 Earth Years', '12 Earth Years', '27 Earth Years', '62 Earth Years'],
        answer: '12 Earth Years'
    },
    {
        question: 'How many moons does Earth have?',
        response: ['2', '3', '1', '1.5'],
        answer: '1'
    },
    {
        question: 'How old is the sun?',
        response: ['10 million years', '878 billion years', '3 billion years', '4.6 billion years'],
        answer: '4.6 billion years'
    },
    {
        question: 'How many moons are currently in our solar system?',
        response: ['181', '67', '677', '210'],
        answer: '181'
    },
    {
        question: 'How long does it take the suns rays to reach Earth?',
        response: ['3 days', '1 week', 'A few hours', 'Eight minutes'],
        answer: 'Eight minutes'
    },
    {
        question: 'Who was the first person to walk on the moon?',
        response: ['Lance Armstrong', 'Shaquille ONeal', 'Neil Armstrong', 'Louis Armstrong'],
        answer: 'Neil Armstrong'
    },
]

var question = document.getElementById('questions');
var container = document.getElementById('container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');

var option = document.querySelectorAll('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');

var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Question ' + (i + 1) + ': ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].response[0];
    option1.innerHTML = questionBank[i].response[1];
    option2.innerHTML = questionBank[i].response[2];
    option3.innerHTML = questionBank[i].response[3];
    stat.innerHTML = "Question " + ' ' + (i + 1) + ' of ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    }
    else {
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

displayQuestion();