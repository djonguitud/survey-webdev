'use strict';

let elScoreFnl = document.querySelector('#score');
let elInicials = document.querySelector('#iniciales');
let subBtn = document.querySelector('#btn');
let init = elInicials.value.trim();
let points = elScoreFnl.value.trim();

let usersScoresInitials = {
	userInit: init,
	userScore: points,
};

localStorage.setItem('userInfo', JSON.stringify(usersScoresInitials));

subBtn.addEventListener('click', function (event) {
	event.preventDefault;
	return false;
});
