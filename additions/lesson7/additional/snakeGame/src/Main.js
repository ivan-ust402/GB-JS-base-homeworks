// Начало приложения

// Ожидаем пока разметка, стили и картинки загрузятся
window.addEventListener('load', () => {
    // Инициализируем объекты игры 
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();

    // Передаем объект настроек
    settings.init({speed: 5, winLength: 5});

});