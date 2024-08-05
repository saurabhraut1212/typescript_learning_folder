abstract class NewClass {
	constructor(public name: string, public email: string) {}
	abstract displayMethod(): void;

	displayNewMethod() {
		console.log('This is new method');
	}
}

class AnotherClass extends NewClass {
	constructor(public name: string, public email: string, public age: number) {
		super(name, email);
	}
	displayMethod(): void {
		console.log('This is display method');
	}
}

const obj1 = new AnotherClass('saurabh', 'saurabh@gmail.com', 22);
