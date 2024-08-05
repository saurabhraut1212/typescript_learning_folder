let greetings: string = 'Hello world';
greetings.toLowerCase();
console.log(greetings);

//number

let userId: number = 23732;
console.log(userId);

//type inference
let userId2 = 3645; //no need to declare the type here because it is smart to understand that the assigned value is number
console.log(userId2);

//boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

//any keyword
let hero: string;

function getHero() {
	return 'hello';
}

hero = getHero();
export {};
