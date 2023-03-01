'use strict';

function MailBuilder(message) {
    this.message = message;
}

MailBuilder.prototype.getBuiltMail = function() {
    return `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
        </head>
        <body>
            ${this.message}
        </body>
        </html>
    `;
};

// let builder = new MailBuilder('текст письма');
// let mail = builder.getBuiltMail();
// console.log(mail);

function MailWithFooterBuilder(message, footerContent) {
    MailBuilder.call(this, message);
    this.footerContent = footerContent;
}

MailWithFooterBuilder.prototype = Object.create(MailBuilder.prototype);
MailWithFooterBuilder.prototype.constructor = MailWithFooterBuilder;

MailWithFooterBuilder.prototype.getSectionMarkup = function(content) {
    return `<tr>
                <td>
                    ${content}
                </td>
            </tr>`;
};

MailWithFooterBuilder.prototype.prepare = function() {
    this.message = `
    <table>
        <tbody style="background: lightgrey;">
            ${this.getSectionMarkup(this.message)}
        </tbody>
        <tfoot style="background: green;">
            ${this.getSectionMarkup(this.footerContent)}
        </tfoot>
    </table>
    `;
};

// let builder2 = new MailWithFooterBuilder('текст письма 2', 'содержимое футера');
// builder2.prepare();
// let mail2 = builder2.getBuiltMail();
// console.log(mail2);

function ProductMailBuilder(message, footerContent, products) {
    MailWithFooterBuilder.call(this, message, footerContent);
    this.products = products; 
}

ProductMailBuilder.prototype = Object.create(MailWithFooterBuilder.prototype);
ProductMailBuilder.prototype.constructor = ProductMailBuilder;

ProductMailBuilder.prototype.getProductMarkUp = function() {
    let markup = '<tr>';
    for (let product of this.products) {
        markup += `
            <td>
                <div>${product.name}</div>
                <img src="${product.image}" alt="${product.name}" />
                <div>${product.price}</div>
            </td>
        `;
    }
    markup += '</tr>';
    return markup;
}


ProductMailBuilder.prototype.prepare = function() {
    this.message = `
    <table>
        <tbody style="background: lightgrey;">
            ${this.getSectionMarkup(this.message)}
            ${this.getProductMarkUp()}
        </tbody>
        <tfoot style="background: green;">
            ${this.getSectionMarkup(this.footerContent)}
        </tfoot>
    </table>
    `;
};


function Product(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
}

let products = [
    new Product('название 1', 'https://site.com/images/1.jpg', 99),
    new Product('название 2', 'https://site.com/images/2.jpg', 249),
    new Product('название 3', 'https://site.com/images/3.jpg', 519),
];

let builder3 = new ProductMailBuilder('покупайте наши товары', 'скидка 50%', products);
builder3.prepare();
let mail3 = builder3.getBuiltMail();
console.log(mail3);