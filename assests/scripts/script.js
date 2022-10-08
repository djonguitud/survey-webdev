'use strict';

/*  Global variables */
//! Section Start variables
const elBtn = document.querySelector('.btn');
let elWelcome = document.querySelector('#main');

//! Section Questions variables
let elQuestionWraper = document.querySelector('#question__wraper');
let elAnswersWraper = document.querySelector('.answers__wraper');
let elAnswers = document.getElementById('click-dgtn');
let elQuestionDec = document.getElementById('question');
let elAnswersList = document.getElementsByTagName('li');

//! Feat Timer variables
let elTimer = document.getElementById('timer');
let seconds = 1;
let minute = 10;

//! Add question array
let questions = [
	{
		q1: 'Si hablamos de HTML5. ¿Cuál de estos NO es un elemento semántico?',
		answer1: {
			answer: 'Div',
			correct: false,
		},
		answer2: {
			answer: 'Section',
			correct: false,
		},
		answer3: {
			answer: 'Address',
			correct: false,
		},
		answer4: {
			answer: 'Main',
			correct: false,
		},
		answer5: {
			answer: 'Footer',
			correct: false,
		},
	},
	{
		q2: 'Si hablamos de CSS3 y en tema de posición. ¿Cuál es el contexto de un elemento posicionado absoluto?',
		answer1: {
			answer: 'El Viewport.',
			correct: false,
		},
		answer2: {
			answer: 'Su elemento padre.',
			correct: false,
		},
		answer3: {
			answer: 'El Body.',
			correct: false,
		},
		answer4: {
			answer: 'Su elemento hermano.',
			correct: false,
		},
		answer5: {
			answer: 'Su elemento padre con posición relative.',
			correct: false,
		},
	},
	{
		q3: 'Si hablamos de Javascript. ¿Qué significa una expresión?',
		answer1: {
			answer: 'Crear una variable.',
			correct: false,
		},
		answer2: {
			answer: 'Una operación que genera un producto.',
			correct: false,
		},
		answer3: {
			answer: 'El producto de una función.',
			correct: false,
		},
		answer4: {
			answer: 'Cuando nombras a una variable.',
			correct: false,
		},
		answer5: {
			answer: 'Ni siquiera es un término de Javascript.',
			correct: false,
		},
	},
	{
		q4: 'Si hablamos de Javascript. ¿Qué significa shadowing?',
		answer1: {
			answer: 'Esconder algún elemento HTML5 usando código Javascript',
			correct: false,
		},
		answer2: {
			answer: 'Declarar una variable con el mismo nombre que otra.',
			correct: false,
		},
		answer3: {
			answer: 'No tengo idea',
			correct: false,
		},
		answer4: {
			answer: 'Declarar una variable local con el mismo nombre que una global.',
			correct: false,
		},
		answer5: {
			answer: 'Agregar un estilo de sombra a algún elemento.',
			correct: false,
		},
	},
	{
		q5: 'Si hablamos de CSS. ¿Que selector tiene mayor relevancia o especificidad sobre todos?',
		answer1: {
			answer: 'Class',
			correct: false,
		},
		answer2: {
			answer: 'Id',
			correct: false,
		},
		answer3: {
			answer: 'Div',
			correct: false,
		},
		answer4: {
			answer: '!important',
			correct: false,
		},
		answer5: {
			answer: 'Un style en línea',
			correct: false,
		},
	},
];

/* Events listener  */

//! Start game
elBtn.addEventListener('click', startTest);

//! Delegation event to select answers list

/* elAnswers.addEventListener('click', function (e) {
	console.log(e.target.parentElement);
}); */

/* Flow functions */

//! Start test
function startTest() {
	//Disappear welcome card
	elWelcome.classList.remove('main__wraper');
	elWelcome.className = 'hidden__wraper';
	questionbox();
}

//! Appear question box
function questionbox() {
	//Remove and set the class for displaying box question
	elQuestionWraper.classList.remove('hidden__wraper');
	elQuestionWraper.classList.add('main__wraper');
	questionSet(questions, 0, questions[0].q1);
	timer;
}

//! Set the group question & answers
function questionSet(qstn, index, prop) {
	let content = `
		<p class="question-sntc" id="question">${qstn[index][prop]}</p>
		<ol class="answers__list__wraper" id="click-dgtn">
			<li class="answer-item wrong"></li>
			<li class="answer-item"></li>
			<li class="answer-item correct"></li>
			<li class="answer-item"></li>
			<li class="answer-item"></li>
		</ol>
				`;

	elAnswersWraper.innerHTML = content;
}

/* let questions = [
	{
		q1: 'Si hablamos de HTML5. ¿Cuál de estos NO es un elemento semántico?',
		answer1: {
			answer: 'Div',
			correct: false,
		},
		answer2: {
			answer: 'Section',
			correct: false,
		},
		answer3: {
			answer: 'Address',
			correct: false,
		},
		answer4: {
			answer: 'Main',
			correct: false,
		},
		answer5: {
			answer: 'Footer',
			correct: false,
		},
	},
 */

/* 	console.log(group[0].qOne);
	elQuestionDec.textContent = group[0].qOne;

	for (let i = 0; i < group.length; i++) {
		group[index].textContent = group[index].prop;
	} */

//We have an array
//
/* 	elQuestionDec.textContent = questions[0].qOne;
	elAnswersList[0].textContent = questions[0].answer1;
	elAnswersList[1].textContent = questions[0].answer2;
	elAnswersList[2].textContent = questions[0].answer3;
	elAnswersList[3].textContent = questions[0].answer4;
	elAnswersList[4].textContent = questions[0].answer5; */

//! Change group of questions and answers

//TODO Appear first group
//TODO If correct answer show green correct answer
//TODO If wrong answer show red and borrow some time from the timer
//TODO when correct appears button for next question

/* Features functions */

//! Set timer set
let timer = setInterval(function () {
	seconds--;
	elTimer.textContent = `${minute}:${seconds}`;

	if (seconds < 10 && !(minute < 10)) {
		elTimer.textContent = `${minute}:0${seconds}`;
	} else if (seconds < 10 && minute < 10) {
		elTimer.textContent = `0${minute}:0${seconds}`;
	} else if (minute < 10 && seconds >= 10) {
		elTimer.textContent = `0${minute}:${seconds}`;
	}

	if (minute === 0 && seconds === 0) {
		seconds = 0;
		minute = 0;
		clearInterval(timer);
		elTimer.textContent = `0${minute}:0${seconds}`;
	} else if (seconds === 0) {
		minute--;
		seconds = 59;
		/* elTimer.textContent = `0${minute}:${seconds}`; */
	}
}, 1000);

//! Display wrong or correct answer
