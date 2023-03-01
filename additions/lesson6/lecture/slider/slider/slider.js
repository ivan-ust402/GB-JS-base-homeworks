"use strict";

function Slider(selector) {
    this.sliderEl = document.querySelector(selector);
    if (!this.sliderEl) {
        throw new Error('Wrong selector');
    }
    this.slides = this.sliderEl.querySelectorAll('.slider-item');
    this.slideIdx = 0;
}

Slider.prototype.init = function () {
    // На самом деле это все можно прописать в html
    // Loader
    const loadIcon = document.createElement('i');
    loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
    this.sliderEl.prepend(loadIcon);

    // Arrows
    const leftArrow = document.createElement('i');
    leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
    this.sliderEl.append(leftArrow);

    const rightArrow = document.createElement('i');
    rightArrow.classList
        .add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
    this.sliderEl.append(rightArrow);

    window.addEventListener('load', () => {
        loadIcon.remove();
        this.slides[this.slideIdx].classList.remove('hidden-slide');
        leftArrow.addEventListener('click', () => {
            this.prevSlide();
        });
        rightArrow.addEventListener('click', () => {
            this.nextSlide();
        });
    });
};

Slider.prototype.nextSlide = function () {
    this.slides[this.slideIdx].classList.add('hidden-slide');
    // this.slideIdx = (this.slideIdx + 1) % this.slides.length;
    if (this.slideIdx < this.slides.length - 1) {
        this.slideIdx += 1;
    } else {
        this.slideIdx = 0;
    }
    
    this.slides[this.slideIdx].classList.remove('hidden-slide');
};

Slider.prototype.prevSlide = function () {    
    this.slides[this.slideIdx].classList.add('hidden-slide');
    if (this.slideIdx > 0) {
        this.slideIdx -= 1;
    } else {
        this.slideIdx = this.slides.length - 1;
    }

    this.slides[this.slideIdx].classList.remove('hidden-slide');
};
