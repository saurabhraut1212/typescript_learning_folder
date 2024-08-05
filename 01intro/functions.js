"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 8;
}
addTwo(4);
//
function getUpper(val) {
    return val.toUpperCase();
}
getUpper('sid');
//
function signup(name, email, isPaid) { }
signup('saurabh', 'hello@gmail.com', false);
//function with default value
function login(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
login('saurabh', 'saurabh@gmail.com'); //no need to pass third parameter as it is by default set as false
//
function withReturn(val) {
    return val + 3;
}
withReturn(6);
//with arrow function
var arrowFunction = function (name) {
    return 'Hello';
};
arrowFunction('shbd');
//the function which does not return anything should be marked as void
function notreturn(val) {
    console.log('Hello');
}
notreturn('sdhbhs');
//function accepting object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'saurabh', isPaid: true });
function createCourse() {
    return { name: 'Saurabh', price: 123 };
}
createCourse();
function acceptUser(user) {
    return { name: '', age: 12, email: '' };
}
acceptUser({ name: '', age: 12, email: '' });
var anotherUser = {
    _id: 1545243,
    name: 'saurabh',
    email: 'saurabh@gmail.com',
    age: 22,
    isActive: true,
};
anotherUser.email = 'abc@gmail.com'; //can be done
var newObject = {
    cardnumber: 6354,
    cardDate: 'asbh',
    cvv: 12,
};
