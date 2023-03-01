// Начало приложения

// Ожидаем пока разметка, стили и картинки загрузятся
window.addEventListener('load', () => {
    // Инициализируем объекты игры 
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();

    // Настройки
    settings.init({speed: 5, winLength: 5});
    board.init(settings, snake);

    // Рисуем игровое поле
    board.renderBoard();
    // Рисуем змейку
    board.renderSnake();
});