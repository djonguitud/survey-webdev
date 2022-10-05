'use strict';

const elBtn = document.getElementById('btn-start');
let elWelcome = document.querySelector('.welcome__wraper');
let elQuestion = document.querySelector('.questions_wraper');

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
}

//Set timer

function timer() {
	// Configura el temporizador
	timer = setInterval(function () {
		timerCount--;
		timerElement.textContent = timerCount;
		if (timerCount >= 0) {
			// Prueba si se cumple la condición win
			if (isWin && timerCount > 0) {
				// Borra el intervalo y detiene el temporizador
				clearInterval(timer);
				winGame();
			}
		}
		// Prueba si se ha agotado el tiempo
		if (timerCount === 0) {
			// Borra el intervalo
			clearInterval(timer);
			loseGame();
		}
	}, 1000);
}
