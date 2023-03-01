/**
 * Настройки игры
 * @date 01.03.2023 - 20:56:47
 *
 * @class Settings
 * @typedef {Settings}
 */
class Settings {
    /**
     * Инициализация параметров игры
     * @param {Object} params - объект с параметрами игры.
     * @param {number} params.rowsCount - количество строк игрового 
     * поля
     * @param {number} params.colsCount - количество колонок игрового
     * поля
     * @param {number} params.speed - скорость перемещения змейки.
     * @param {number} params.winLength - какую длину надо наесть, 
     * чтобы выиграть.
     * @throws {Error} если переданы не верные настройки 
     * выбрасывается соответствующая ошибка.
     */
    init(params) {
        let defaultParams = {rowsCount: 21, colsCount: 21, speed: 2, winLength: 50};
        Object.assign(defaultParams, params);

        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error('Неверные настройки, значение rowsCount должно быть в диапазоне от 10 до 30');
        }
        this.rowCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error('Неверные настройки, значение colsCount должно быть в диапазоне от 10 до 30');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new Error('Неверные настройки, значение speed должно быть в диапазоне от 1 до 10');
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winLength < 5 || defaultParams.winLength > 50) {
            throw new Error('Неверные настройки, значение winLength должно быть в диапазоне от 10 до 30');
        }
        this.winLength = defaultParams.winLength;
    }
}