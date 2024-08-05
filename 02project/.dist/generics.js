"use strict";
function first(val) {
    return val;
}
first('saurabh');
function identity(val) {
    return val;
}
identity({ brand: '', type: 12 });
//pass array parameter
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//above function arrow function format
const searchFunction = (products) => {
    return products[3];
};
function anotherFunction(valueOne, valueTwo) {
    //advance generic concept
    return {
        valueOne,
        valueTwo,
    };
}
anotherFunction(4, { connection: '', username: '', password: '' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
