//
const numberArray: number[] = [];
//numberArray.push("sdbvcsbd")//as it is number array it does not accept string values
numberArray.push(23);

//
const stringArray: string[] = [];
stringArray.push('shdhdv');

type User = {
	name: string;
	isActive: boolean;
};

const usersArray: User[] = []; //array is of the User type
usersArray.push({ name: '', isActive: true });
