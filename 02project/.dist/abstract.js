"use strict";
class NewClass {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    displayNewMethod() {
        console.log('This is new method');
    }
}
class AnotherClass extends NewClass {
    constructor(name, email, age) {
        super(name, email);
        this.name = name;
        this.email = email;
        this.age = age;
    }
    displayMethod() {
        console.log('This is display method');
    }
}
const obj1 = new AnotherClass('saurabh', 'saurabh@gmail.com', 22);
