//

function addTwo(num: number) {
	return num + 8;
}

addTwo(4);

//
function getUpper(val: string) {
	return val.toUpperCase();
}

getUpper('sid');

//
function signup(name: string, email: string, isPaid: boolean) {}

signup('saurabh', 'hello@gmail.com', false);

//function with default value
function login(name: string, email: string, isPaid: boolean = false) {}
login('saurabh', 'saurabh@gmail.com'); //no need to pass third parameter as it is by default set as false

//
function withReturn(val: number): number {
	return val + 3;
}
withReturn(6);

//with arrow function

const arrowFunction = (name: string): string => {
	return 'Hello';
};
arrowFunction('shbd');

//the function which does not return anything should be marked as void
function notreturn(val: string): void {
	console.log('Hello');
}
notreturn('sdhbhs');

//function accepting object

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: 'saurabh', isPaid: true });

function createCourse(): { name: string; price: number } {
	return { name: 'Saurabh', price: 123 };
}

createCourse();

//use of type keyword

type User = {
	name: string;
	age: number;
	email: string;
};
function acceptUser(user: User): User {
	return { name: '', age: 12, email: '' };
}
acceptUser({ name: '', age: 12, email: '' });

//readOnly keyword and optional mark

type newUser = {
	readonly _id: number;
	name: string;
	email: string;
	age: number;
	isActive: boolean;
	credicardDetails?: number; //this field is optional
};

let anotherUser: newUser = {
	_id: 1545243,
	name: 'saurabh',
	email: 'saurabh@gmail.com',
	age: 22,
	isActive: true,
};
anotherUser.email = 'abc@gmail.com'; //can be done
//anotherUser._id=3645//gives error

//we can combine different types into one

type cardNumber = {
	cardnumber: number;
};

type cardDate = {
	cardDate: string;
};

type cardDetails = cardNumber &
	cardDate & {
		//this can combine the different types into single type
		cvv: number;
	};

let newObject: cardDetails = {
	cardnumber: 6354,
	cardDate: 'asbh',
	cvv: 12,
};
export {};
