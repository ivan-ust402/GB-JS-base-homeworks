// Начало приложения

// Ожидаем пока разметка, стили и картинки загрузятся
window.addEventListener('load', () => {
    // Создаем объект настроек 
    const settings = new Settings();
    // Передаем объект настроек
    settings.init({speed: 5, winLength: 5});

});