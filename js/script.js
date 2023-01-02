let formElement = document.querySelector('.js-form');
let valueElement = document.querySelector('.js-value');
let courseElement = document.querySelector('.js-course');
let resultElement = document.querySelector('.js-result');
let eurElement = document.querySelector('.js-eur');

formElement.addEventListener('submit', (event) => {
	event.preventDefault();

	let value = valueElement.value;
	let course = courseElement.value;

	let eur = value * course;
	eurElement.innerText = eur;
});
