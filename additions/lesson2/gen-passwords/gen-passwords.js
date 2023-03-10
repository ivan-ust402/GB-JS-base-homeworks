"use-strict";

// Набор символов, из которых будет генерироваться пароль
let symbols = "1234567890!@#$%^&*()_+;:][}{/?.,\
qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"; //86 символов
let password = '';

/**
 * Функция возвращает случайное целое число между min(включительно) и 
 * max(не включая max)
 * @param {number} min минимальное значение диапазона для поиска
 * @param {number} max максимальное значение диапазона для поиска
 * @returns {number} случайная позиция в строке символов
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples 
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Функция генерирует случайный пароль
 * @param {number} passLength длина пароля 
 * @returns {void} выводит случайный пароль
 */
function generatePassword(passLength) {
    let symbolPosition = getRandomInt(0, 87);
    password += symbols.charAt(symbolPosition);
    passLength--;
    if(passLength !== 0) {
        generatePassword(passLength);
    }
}

/**
 * Функция спрашивает у пользователей длину пароля.
 * @returns {number} длина пароля
 */
function askPassLength() {
    return parseInt(prompt("Введите длину пароля:"));
}

generatePassword(askPassLength());
alert(`Ваш пароль: ${password}`);