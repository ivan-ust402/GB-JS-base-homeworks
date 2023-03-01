'usestrict';
/**
 * Функция получения массива, состоящего из 4 неповторяющихся
 * цифр.
 * @returns {Array} загаданный массив компьютером
 */
function getRandomNumberAsArray() {
    let generated = String(Math.random() * 1000000000000000);
    let result = [];
    for (let value of generated) {
        if (!result.includes(value)) {
            result.push(value);
        }
        if (result.length === 4) {
            return result;
        }
    }
}

/**
 * Функция запуска игры.
 */
function startGame() {
    let riddle = getRandomNumberAsArray();
    console.log(riddle);
    while(true) {
        let answer = prompt("Угадайте 4-х значное число").split("");
        let result = getBullsAndCows(riddle, answer);
        console.log(`Ваш ответ: ${answer},\n быков: ${result.bullsCount}, коров: ${result.cowsCount}\n`);
        if (riddle.toString() === answer.toString()) {
            console.log("Вы победили!");
            break;
        }
    }
    console.log("Загадка: " + riddle);
}

/**
 * Функция возвращает количество быков и коров.
 * @param {Array} riddle - загаданное четырехзначное число
 * @param {Array} answer - ответ пользователя
 * 
 * @returns {Object} obj - количество быков и коров
 * @returns {number} obj.bullCount - количество быков
 * @returns {number} obj.cowsCount - количество коров
 */
function getBullsAndCows(riddle, answer) {
    let bullsCount = getBullsCount(riddle, answer);
    let cowsCount = getCowsCount(riddle, answer);
    return {
        "bullsCount": bullsCount,
        "cowsCount": cowsCount - bullsCount,    // из коров вычитаем тех, 
                                                // что оказались быками
    }
}

/**
 * Функция возвращает количество быков.
 * @param {Array} riddle 
 * @param {Array} answer 
 * 
 * @returns {number} 
 */
function getBullsCount(riddle, answer) {
    let count = 0;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] == answer[i]) {
            count++;
        }
    }
    return count;
}

/**
 * Функция возвращает количество коров.
 * @param {Array} riddle 
 * @param {Array} answer 
 * 
 * @returns {number}  
 */
function getCowsCount(riddle, answer) {
    let count = 0;
    for (let value of riddle) {
        if(answer.includes(value)) {
            count++;
        }
    }
    return count;
}

startGame();