function detect(val: string | number) {
	if (typeof val === 'string') {
		return val.toUpperCase();
	}
	return val + 5;
}

function detection(val: string | null) {
	if (!val) {
		console.log('Pls provide ID');
		return;
	}
	return val.toUpperCase();
}

//narrowing and in operator

interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	email: string;
	isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
	if ('isAdmin' in account) {
		return account.isAdmin;
	}
}
