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

//! Form Var
let elScoreFnl = document.querySelector('#score');
let elInicials = document.querySelector('#iniciales');
let subBtn = document.querySelector('#subBtn');

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
}

//!Remove welcome card
function startGame() {
	elWelcomeSctn.classList.add('hidden__wraper');
	elWelcomeSctn.classList.remove('main__wraper');
	addQstnCard();
	setInterval(function () {
		seconds--;
		elTimer.textContent = `${seconds}`;
		seconds === 0 ? quitGame() : false;
	}, 1000);
}

//! Add question box
function updateQstn(i) {
	switch (i) {
		case 0:
			elAnswersWraper.innerHTML = `<p id="question">${questions[index]['q1']}</p>
			<ol class="answers__list__wraper" id="click-dgtn">
				<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
				<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
			</ol>`;
			break;
		case 1:
			elAnswersWraper.innerHTML = `<p id="question">${questions[index]['q2']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item"data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 2:
			elAnswersWraper.innerHTML = `<p id="question">${questions[index]['q3']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 3:
			elAnswersWraper.innerHTML = `<p id="question">${questions[index]['q4']}</p>
				<ol class="answers__list__wraper" id="click-dgtn">
					<li class="answer-item" data-iscorrect="${questions[index]['answer1']['correct']}">${questions[index]['answer1']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer2']['correct']}">${questions[index]['answer2']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer3']['correct']}">${questions[index]['answer3']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer4']['correct']}">${questions[index]['answer4']['answer']}</li>
					<li class="answer-item" data-iscorrect="${questions[index]['answer5']['correct']}">${questions[index]['answer5']['answer']}</li>
				</ol>`;
			break;
		case 4:
			elAnswersWraper.innerHTML = `<p id="question">${questions[index]['q5']}</p>
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
	elScoreFnl.textContent = String(score);
}

/*=====  End of Section comment block  ======*/

/*=============================================
=            EVENTS SECTION          =
=============================================*/

//!Click start game
startBtn.addEventListener('click', startGame);

//!Delegation event to select correct answer
elAnswersWraper.addEventListener('click', function (event) {
	let correctAws = event.target.dataset.iscorrect;
	if (correctAws === 'true') {
		index++;
		score += 20;
		updateQstn(index);
		index === questions.length ? lastStage() : false;
	} else {
		seconds -= 10;
		seconds <= 0 ? quitGame() : false;
	}
});

/*=====  End of Section comment block  ======*/

/*=============================================
=            FORM GENERATOR           =
=============================================*/

//!Prevent default last button
subBtn.addEventListener('click', function (event) {
	//!Prevent Default
	event.preventDefault();

	//!User info object
	let usersScoresInitials = {
		userInit: elInicials.value.trim(),
		userScore: elScoreFnl.textContent.trim(),
	};
	//!Convert the user object into a JSON file
	localStorage.setItem('userInfo', JSON.stringify(usersScoresInitials));

	console.log(elScoreFnl.textContent);
});

/*=====  End of Section comment block  ======*/

/*=============================================
=           MISC CODE           =
=============================================*/

//! Finish game and jump to last section
function quitGame() {
	clearInterval(timer);
	return lastStage();
}

console.log(seconds);

/*=====  End of Section comment block  ======*/
