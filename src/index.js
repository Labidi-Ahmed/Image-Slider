const slides = document.querySelectorAll('.slides img');
console.log(slides);
let slideIndex = 0;

const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

function initialiseSlide() {
	slides[0].classList.add('visible');
	console.log(slides[0]);
}

document.addEventListener('DOMContentLoaded', initialiseSlide);

function incrementSlide() {
	if (slideIndex === slides.length - 1) {
		slideIndex = 0;
	} else {
		slideIndex++;
	}
}

function decrementSlide() {
	if (slideIndex === 0) {
		slideIndex = slides.length - 1;
	} else {
		slideIndex--;
	}
}

function showSlide(className) {
	slides.forEach((slide) => {
		slide.classList.remove('visible');
		slide.classList.remove(rightSlideClass);
		slide.classList.remove(leftSlideClass);
	});
	slides[slideIndex].classList.add('visible');
	slides[slideIndex].classList.add(className);
}

const rightSlideClass = 'visible-right';
const leftSlideClass = 'visible-left';
function nexSlide() {
	incrementSlide();
	showSlide(rightSlideClass);
}

function prevSlide() {
	decrementSlide();
	showSlide(leftSlideClass);
}

rightBtn.addEventListener('click', () => {
	nexSlide();
	console.log('work');
});

leftBtn.addEventListener('click', prevSlide);
