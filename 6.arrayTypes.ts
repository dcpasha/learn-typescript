// String
const activeUser: string = "Mike"; // this is a string

// Arrays of strings or number
const activeUsers: string[] = ["Johnson"]; // this is array of strings
activeUsers.push("Steven");

const numbers: number[] = [1, 2, 3, 4, 5];

// An alternative syntax
let names: Array<string> = ['Hello', 'World'];

const bools: Array<boolean> = [];

// Object type - describes its type
type Point = {
    x: number,
    y: number
}

const coords: Point[] = []
coords.push({x: 23, y: 5});

// Multi-dimensional Arrays
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "X", "X"],
    ["O", "O", "O"]
];