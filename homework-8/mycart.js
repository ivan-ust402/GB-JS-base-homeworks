const cart = document.querySelector('.mycart');
const content = document.querySelector('.mycart-content');
const itemsBlock = document.querySelector('.items__block');
const goodsInBacket = {};

cart.addEventListener('click', () => {
    if(content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
});

itemsBlock.addEventListener('click', event => {  
    if( 
        event.target.classList.contains('item__button')
        || event.target.classList.contains('item__button-icon')
        || event.target.classList.contains('item__button__text')) {
            const productObj = {...findParentNodebyClass(event.target, 'item').dataset};
            addToCart(goodsInBacket, productObj);
            addCountToBucketIcon(goodsInBacket);
            addInfoToBucketBlock(goodsInBacket);
    }
})

function addInfoToBucketBlock(bucketObj) {
    const bucketContentRowEl = document.createElement('div');
    bucketContentRowEl.classList.add('mycart-content__row'); 
    bucketContentRowEl.classList.add('find-row'); 
    const  bucketContentHeaderRowEl = document.querySelector('.mycart-content__header');
    const totalSumEl = document.querySelector('.mycart-content__total-value');
    // const findExistRowEl = document.querySelector('.find-row');
    // console.log(findExistRowEl);
    // if (!findExistRowEl.length) {
    //     findExistRowEl.parentNode.removeChild(findExistRowEl);
    // }
    const findRows = content.querySelectorAll('.find-row');
    if(findRows.length !== 0) {
        findRows.forEach(el => {
            el.remove();
        })
    }
    let sum = 0;
    let stringHTML = '';
    
    for (const key in bucketObj) {
        stringHTML += `
        <div>${bucketObj[key].name}</div>
        <div>${bucketObj[key].count} шт.</div>
        <div>$${bucketObj[key].price}</div>
        <div>$${bucketObj[key].price * bucketObj[key].count}</div>
        `
        bucketContentRowEl.innerHTML = stringHTML;
        bucketContentHeaderRowEl.insertAdjacentElement('afterend', bucketContentRowEl);
        sum += bucketObj[key].price * bucketObj[key].count;
    }
    totalSumEl.innerHTML = sum;

}

function addCountToBucketIcon(bucketObj) {
    const goodsCount = document.querySelector('.mycart__count');
    if (Object.keys(bucketObj).length !== 0) {
        goodsCount.classList.remove('hidden');
        goodsCount.textContent = Object.keys(bucketObj).length;
    }
}

function findParentNodebyClass(el, findClass) {
    const parent = el.parentNode;
    const contains = parent.classList.contains(findClass);
    if(contains) {
        return parent;
    } else {
        if (parent.tagName.toLowerCase() === 'body') {
            return null;
        }
        return findParentNodebyClass(parent, findClass)
    }
}

function addToCart(targetObject, addObject) {
        const isEmpty = Object.keys(targetObject).length === 0 ? true: false;
        const keyNumber = Object.keys(targetObject).length;

        if (isEmpty) {
            targetObject[0] = {...addObject, count: 1};
            
        } else {
            let marker = false;
            for (key in targetObject) {
                if (targetObject[key].id === addObject.id) {
                    targetObject[key].count++;
                    marker = true;
                } 
            }
            if (!marker) {
                targetObject[keyNumber] = {...addObject, count: 1};
            }
        }
        // console.log(targetObject);
} 

function removeFromCart(targetObject, removeObj) {
    
}

