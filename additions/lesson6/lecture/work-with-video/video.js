'use strict';

const videoEl = document.querySelector('video');
const playBtnEl = document.querySelector('.fa-play');
const pauseBtnEl = document.querySelector('.fa-pause');
const currentTimeEl = document.querySelector('.currentTime');
const timingEl = document.querySelector('.timing');
const volumeEl = document.querySelector('.volume');

playBtnEl.addEventListener('click', () => {
    videoEl.play();
})

pauseBtnEl.addEventListener('click', () => {
    videoEl.pause();
})

videoEl.addEventListener('click', () => {
    if (videoEl.paused) {
        videoEl.play(); 
    } else {
        videoEl.pause();
    }
})

videoEl.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = videoEl.currentTime.toFixed(1);
    timingEl.value = videoEl.currentTime / videoEl.duration * 100;
})

videoEl.addEventListener('volumechange', () => {
    volumeEl.value = videoEl.volume;
})

volumeEl.addEventListener('input', () => {
    console.log(volumeEl.value)
    videoEl.volume = volumeEl.value;
})

timingEl.addEventListener('input', () => {
    videoEl.currentTime = timingEl.value / 100 * videoEl.duration; 
})

document.addEventListener('keydown', event => {
    const currentKey = event.code;
    if (currentKey === 'ArrowRight') {
        if (videoEl.duration > videoEl.currentTime) {
            videoEl.currentTime += 10; 
        }
    } else if (currentKey === 'ArrowLeft') {
        if (0 < videoEl.currentTime) {
            videoEl.currentTime -= 10; 
        }
    } else if (currentKey === 'ArrowUp') {
        if (videoEl.volume < 1 && volumeEl.value < 1) {
            videoEl.volume += 0.1; 
        }
    } else if (currentKey === 'ArrowDown') {
        if (videoEl.volume > 0 && volumeEl.value > 0) {
            videoEl.volume -= 0.1; 
        }
    } else if (currentKey === 'Space') {
        if (videoEl.paused) {
            videoEl.play(); 
        } else {
            videoEl.pause();
        }
    } 
})