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
    console.log(content);
    
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
        console.log(targetObject);
} 

