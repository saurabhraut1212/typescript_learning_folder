"use strict";
// class User {
// 	public name: string;
// 	email: string;
// 	private readonly city: string = 'Jaipur';
// 	constructor(name: string, email: string) {
// 		(this.name = name), (this.email = email);
// 	}
// }
// const obj = new User('saurabh', 'saurabh@gmail.com');
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
    }
    get coursecount() {
        return this._courseCount;
    }
    set coursecount(count) {
        if (count <= 1) {
            throw new Error('Course count should be more than 1');
        }
        this._courseCount = count;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const obj = new User('saurabh', 'saurabh@gmail.com');
