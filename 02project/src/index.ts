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
	protected _courseCount = 1;
	constructor(public name: string, public email: string) {}
	get coursecount(): number {
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
	isFamily: boolean = true;
	changeCourseCount() {
		this._courseCount = 4;
	}
}
const obj = new User('saurabh', 'saurabh@gmail.com');
