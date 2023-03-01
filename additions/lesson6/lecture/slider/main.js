"use strict";

const slider = new Slider('.slider');
slider.init();

setInterval(() => {
    slider.nextSlide();
}, 5000);