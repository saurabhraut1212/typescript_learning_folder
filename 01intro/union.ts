//union in typescript is used to combine more than two datatypes
//when we do not know what is the data type of input value

let score: number | string = 23;
score = 44;
score = 'Saurabh';

type Seller = {
	name: string;
	id: number;
};
type Buyer = {
	username: string;
	id: number;
};

let useroptions: Seller | Buyer = { name: 'saurabh', id: 12 };
useroptions = { username: 'abc', id: 12 };

function acceptOptions(id: number | string) {
	console.log(`this is ${id}`);
}
acceptOptions(3);
acceptOptions('strh');

function anotherFunction(id: number | string) {
	if (typeof id === 'string') {
		console.log(id.toUpperCase());
	}
}
anotherFunction(2);
anotherFunction('sair');

let numberArr: number[] = [1, 2, 3, 4];
let stringArr: string[] = ['ass', 'sdns'];
let mixedArray: (number | string)[] = ['sds', 12, 'dhgh'];
export {};
