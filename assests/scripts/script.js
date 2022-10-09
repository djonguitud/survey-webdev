'use strict';

/*=============================================
=            VARIABLES SECTION            =
=============================================*/
//! Container Var
let container = document.querySelector('.container');

//! Welcome elements Var
let elWelcomeSctn = document.querySelector('#welcome');
let startBtn = document.querySelector('.btn');

//! Question Cards Var
let elQuestionSctn = document.querySelector('#question__wraper');
let elAnswersWraper = document.querySelector('.answers__wraper');

//! Last stage Var
let goodbye = document.querySelector('#goodbye');

//!Object Questions Var
let index = 0;

//! Score Var
let score = 0;

//! Feat Timer Var
let elTimer = document.getElementById('timer');
let seconds = 61;

/*=====  End of Section comment block  ======*/

/*=============================================
=            FLOW DOM SECTION          =
=============================================*/
//! Add questions card
function addQstnCard() {
	qstnMarkUp();
	updateQstn(index);
}

//! Add question markup
function qstnMarkUp() {
	elQuestionSctn.classList.remove('hidden__wraper');
	elQuestionSctn.classList.add('main__wraper');
	timer;
}

//!Remove welcome card
function startGame() {
	elWelcomeSctn.classList.add('hidden__wraper');
	elWelcomeSctn.classList.remove('main__wraper');
	addQstnCard();
}

//! Add question box
function updateQstn(i) {
	switch (i) {
		case 0:
			elAnswersWraper.innerHTML = `<p class="question-sntc" id="question">${questions[index]['q1']}</p>
			<ol class="answers__list__wraper" id="click-dgtn">
				<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
			</ol>`;
			break;
		case 1:
			elAnswersWraper.innerHTML = `<p class="question-sntc" id="question">${questions[index]['q2']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item"data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 2:
			elAnswersWraper.innerHTML = `<p class="question-sntc" id="question">${questions[index]['q3']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 3:
			elAnswersWraper.innerHTML = `<p class="question-sntc" id="question">${questions[index]['q4']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 4:
			elAnswersWraper.innerHTML = `<p class="question-sntc" id="question">${questions[index]['q5']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
	}
}

//! Add the form wraper for the last stage
function lastStage() {
	elQuestionSctn.classList.add('hidden__wraper');
	elQuestionSctn.classList.remove('main__wraper');
	goodbye.classList.remove('hidden__wraper');
	goodbye.innerHTML = `<div class='form__wraper'>
			<form class='form-sub' action='#'>
				<p class='score-item'>
				Score: <span id='score'>${score}</span>
				</p>
				<li>
					<label for='name'>Escribe tus iniciales:</label>
					<input type='text' name='name' id='iniciales' placeholder='Tus iniciales' size='25' required />
				</li>
				<li>
					<input class='btn' type='submit' value='Submit' />
				</li>
			</form>
		</div>`;
}

/*=====  End of Section comment block  ======*/

/*=============================================
=           FEATURES SECTION            =
=============================================*/

//! Set timer set
let timer = setInterval(function () {
	seconds--;
	elTimer.textContent = `${seconds}`;
	if (seconds === 0) {
		quitGame();
	}
}, 1000);

//! Finish game and jump to last section
function quitGame() {
	clearInterval(timer);
	return lastStage();
}

/*=====  End of Section comment block  ======*/

/*=============================================
=            EVENTS SECTION          =
=============================================*/

//!Event Listener
startBtn.addEventListener('click', startGame);

//!Delegation event to select correct answer

elAnswersWraper.addEventListener('click', function (event) {
	let correctAws = event.target.dataset.iscorrect;
	if (correctAws === 'true') {
		index++;
		score += 20;
		console.log(index);
		updateQstn(index);
		index === questions.length ? lastStage() : console.log('index is < quesitons array');
	} else {
		seconds -= 10;
		seconds <= 0 ? quitGame() : false;
	}
});

/*=====  End of Section comment block  ======*/
