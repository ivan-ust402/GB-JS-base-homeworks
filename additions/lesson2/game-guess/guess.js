'use strict';

// riddle - загадка, получаем рандомное число от компьютера
const riddle = parseInt(Math.random() * 10);

/**
 * Функция для опроса пользователя: Какое число загадал компьютер?
 * @param {number} num Число получаемое от компьютера 
 * результат: Угадал или нет
 */
function guess(num, count = 1) {
    let answer = parseInt(prompt("Угадайте число от 0 до 10"))
    if (answer > num) {
        alert("Ваше число слишком большое");
    } else if (answer < num) {
        alert("Ваше число слишком маленькое");
    } else if (answer == num){
        alert(`Поздравляю! Вы угадали число! Число компьютера: ${num}, ваше число: ${answer}, число попыток: ${count}`)
        return;
    } else {
        alert("Необходимо ввести число!")
    }
    guess(num, count + 1); //рекурсия - функция вызывает саму себя
}



guess(riddle);