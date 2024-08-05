function first<T>(val: T): T {
	return val;
}
first('saurabh');

interface Bottle {
	brand: string;
	type: number;
}

function identity<T>(val: T): T {
	return val;
}

identity<Bottle>({ brand: '', type: 12 });

//pass array parameter

function getSearchProducts<T>(products: T[]): T {
	const myIndex = 3;
	return products[myIndex];
}

//above function arrow function format

const searchFunction = <T>(products: T[]): T => {
	return products[3];
};

interface Database {
	connection: string;
	username: string;
	password: string;
}

function anotherFunction<T, U extends Database>(
	valueOne: T,
	valueTwo: U
): object {
	//advance generic concept
	return {
		valueOne,
		valueTwo,
	};
}

anotherFunction(4, { connection: '', username: '', password: '' });

//generic class
//for bigger thing it can be used in more advanced way

interface Quiz {
	name: string;
	type: string;
}

interface Course {
	name: string;
	author: string;
	subject: string;
}

class Sellable<T> {
	public cart: T[] = [];

	addToCart(product: T) {
		this.cart.push(product);
	}
}
