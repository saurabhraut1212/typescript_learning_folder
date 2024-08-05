//enum keyword is used to declare the enums

//In TypeScript, an enum (short for "enumeration") is a way to define a set of named constants.These constants
// can be either numeric or string values, and using enum makes your code more readable and easier to maintain.
enum setBoard {
	AISLE,
	MIDDLE,
	WINDOW,
}

const anotherSeat = setBoard.AISLE;

enum Direction {
	North = 1,
	South,
	East,
	West,
}

let currentDirection: Direction = Direction.North;

console.log(currentDirection); // Output: 1
