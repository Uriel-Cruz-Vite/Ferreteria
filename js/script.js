/**
 * @file This file contains the JavaScript code for the Ferretería GUICHO website.
 * @description It handles the image carousel functionality on the homepage, cycling through images every 5 seconds.
 */

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);
