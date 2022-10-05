'use strict';
/* Global variables */

//Section Start variables
const elBtn = document.getElementById('btn-start');
let elWelcome = document.querySelector('.welcome__wraper');

//Section Questions variables
let elQuestion = document.querySelector('.questions__wraper');

//Feat Timer variables
let elTimer = document.getElementById('timer');
let seconds = 60;
let minute = 11;

elBtn.addEventListener('click', startTest);

//Add question list

/* Flow functions*/

//Start test
function startTest() {
	//Disappear welcome card
	elWelcome.className = 'hidden__wraper';
	questionbox();
}

/*Appear question box */
function questionbox() {
	//Remove and set the class for displaying box question
	elQuestion.classList.remove('hidden__wraper');
	elQuestion.classList.remove('questions__wraper');
	elQuestion.classList.add('main__wraper');
	timer;
}

/* Features functions */

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
		seconds = 59;
		/* elTimer.textContent = `0${minute}:${seconds}`; */
	}
}, 1000);
