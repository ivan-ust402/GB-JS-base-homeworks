'use strict';

const icons = document.querySelectorAll('i');

icons.forEach(icon => {
    icon.addEventListener('click', addLike);
})

/**
 * Функция отображения лайка
 * @param {MouseEvent} event 
 */
function addLike(event) {
    if (event.target.classList.contains('far')) {
        event.target.classList.remove('far');
        event.target.classList.add('fas');
    } else {
        event.target.classList.remove('fas');
        event.target.classList.add('far');
    }
}