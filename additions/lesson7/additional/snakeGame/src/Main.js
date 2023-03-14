// Начало приложения

// Ожидаем пока разметка, стили и картинки загрузятся
window.addEventListener('load', () => {
    // Инициализируем объекты игры 
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();

    const food = new Food();
    const game = new Game();

    // Настройки
    settings.init({speed: 5, winLength: 5});
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food);

    // Рисуем игровое поле
    board.renderBoard();
    // Рисуем змейку
    board.renderSnake();
    // Устанавливаем еду
    food.setNewFood();
});