'use strict';

const noMessagesEl = document.querySelector('.noMessages');
const messagesEl = document.querySelector('.messages');
const textAreaEl = document.querySelector('textarea');
const errorTextAreaEl = document.querySelector('.errorTextarea');
const nameInputEl = document.querySelector('input');
const errorInputEl = document.querySelector('.errorInput');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');


const messageElClassName = 'message';

sendBtn.addEventListener('click', () => {
    if (textAreaEl.value === "") {
        errorTextAreaEl.textContent = "Сообщение не может быть пустым.";
        return;
    } else {
        errorTextAreaEl.textContent = "";
    }

    if (nameInputEl.value === "") {
        errorInputEl.textContent = "Имя не может быть пустым.";
        return;
    } else {
        errorInputEl.textContent = "";
    }

    hideNoMessagesText();
    const markupEl = getMessageMarkup(textAreaEl.value, nameInputEl.value, getTime());
    messagesEl.insertAdjacentHTML('beforeend', markupEl);
    nameInputEl.value = "";
    textAreaEl.value = "";

});

function getMessageMarkup(text, author, time) {
    return `<div class="${messageElClassName}">
        <div>Сообщение: ${text}</div>
        <div>Автор: ${author}</div>
        <div>Время: ${time}</div>
    </div>`;
}

function getTime() {
    const date = new Date();
    const hours = checkTwoDigit(date.getHours());
    const minutes = checkTwoDigit(date.getMinutes());
    const seconds = checkTwoDigit(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

function hideNoMessagesText() {
    noMessagesEl.style.display = 'none';
}

function checkTwoDigit(num) {
    if (parseInt(num / 10) === 0) {
        return `0${num}`;
    }
    return num;
}

function showNoMessagesText() {
    noMessagesEl.style.display = 'block';
}

clearBtn.addEventListener('click', () => {
    showNoMessagesText();
    const messagesElems = document.querySelectorAll("."+messageElClassName);
    messagesElems.forEach(message => {
        message.remove();
    });
});