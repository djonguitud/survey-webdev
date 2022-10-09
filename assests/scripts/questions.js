'use strict';

//! Add question array
let questions = [
	{
		q1: 'Si hablamos de HTML5. ¿Cuál de estos NO es un elemento semántico?',
		answer1: {
			answer: 'Div',
			correct: true,
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
			correct: true,
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
			correct: true,
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
			correct: true,
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
			correct: true,
		},
		answer5: {
			answer: 'Un style en línea',
			correct: false,
		},
	},
];
