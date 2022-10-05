'use strict';
/* Global variables */
const elBtn = document.getElementById('btn-start');
let elWelcome = document.querySelector('.welcome__wraper');
let elQuestion = document.querySelector('.questions_wraper');

//Timer variables
let elTimer = document.getElementById('timer');
let seconds = 13;
let minute = 10;

elBtn.addEventListener('click', startTest);

//Add question list

/* Function start test */
function startTest() {
	//Disappear welcome card
	elWelcome.className = 'hidden__wraper';
	questionbox();
}

/* Function appear question box */
function questionbox() {
	//Remove and set the class for displaying box question
	elQuestion.classList.remove('hidden__wraper');
	elQuestion.classList.add('main__wraper');
	timer;
}

//Set timer set
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
		seconds = 13;
		/* elTimer.textContent = `0${minute}:${seconds}`; */
	}
}, 1000);
