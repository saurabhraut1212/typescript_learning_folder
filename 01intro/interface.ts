//

interface Person {
	readonly personId: number;
	name: string;
	email: string;
	googleId?: string;
	getFunction: () => string;
	getCoupon: (couponName: string) => number;
}

//reopening of the interface
//we can again open the same interface and add some properties in it

interface Person {
	githubId: string;
}

//interface can be extended and can be reopened
//types can not be reopened and for concatenation & sign is used

interface Admin extends Person {
	role: 'admin' | 'ta' | 'learner';
}
let makeUser: Admin = {
	personId: 22,
	role: 'admin',
	name: 'saurabh',
	email: 'saurabh@gmail.com',
	githubId: 'shwri',
	googleId: 'sas',
	getFunction: () => {
		return 'Hello Function';
	},
	getCoupon: (couponName: string) => {
		return 12;
	},
};
console.log(makeUser.getCoupon('saurabh')); //print 12
