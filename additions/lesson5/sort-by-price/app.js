'use strict';

/** @var {NodeList<HTMLDivElement>} products */
const products = document.querySelectorAll('.product');

/** @var {HTMLInputElement} fromInput */
const fromInput = document.getElementById('from');
fromInput.addEventListener('change', changedPriceHandler);

/** @var {HTMLInputElement} toInput */
const toInput = document.getElementById('to');
toInput.addEventListener('change', changedPriceHandler);

/** Обработчик события на изменения полей ввода. */
function changedPriceHandler() {
    const fromPrice = fromInput.value;
    const toPrice = toInput.value;

    if (fromPrice === "" && toPrice === "") {
        reset();
    } else if (fromPrice !== "" && toPrice === "") {
        showProductsWithFromPrice();
    } else if (fromPrice === "" && toPrice !== "") {
        showProductsWithToPrice();
    } else if (fromPrice !== "" && toPrice !== "") {
        showProductsWithBothPrice();
    }
}

/**
 * Показывает все скрытые элементы
 */
function reset() {
    products.forEach(product => {
        if (isProductHidden(product)) {
            showProduct(product);
        }
    })
}

/**
 * Показывает продукты с диапазоном цен "от".
 */
function showProductsWithFromPrice() {
    const fromPrice = Number(fromInput.value);
    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice < fromPrice) {
            hideProduct(product);
        } else {
            showProduct(product);
        }
    })
}

/**
 * Показывает продукты с диапазоном цен "до".
 */
function showProductsWithToPrice() {
    const toPrice = Number(toInput.value);
    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice > toPrice) {
            hideProduct(product);
        } else {
            showProduct(product);
        }
    })
}

/**
 * Показывает продукты с диапазоном цен "от" и "до".
 */
function showProductsWithBothPrice() {
    const fromPrice = Number(fromInput.value);
    const toPrice = Number(toInput.value);
    if (fromPrice > toPrice) {
        alert("Цена ОТ не может быть больше цены ДО.");
        reset();
        return;
    }
    products.forEach(product => {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice >= fromPrice && productPrice <= toPrice) {
            showProduct(product);
        } else {
            hideProduct(product);
        }
    })
}

/** @param {HTMLDivElement} product */
function hideProduct(product) {
    // product.style.opacity = '0.3';
    // Для реального сайта:
    product.style.display = 'none';
}

/** @param {HTMLDivElement} product */
function showProduct(product) {
    // product.style.opacity = '1';
    // Для реального сайта:
    product.style.display = 'block';
}

/**
 * Скрыт ли продукт?
 * @param {HTMLDivElement} product 
 * @returns {Boolean} true or false
 */
function isProductHidden(product) {
    // return product.style.opacity === '0.3';
    // Для реального сайта
    return product.style.display === 'none'
}