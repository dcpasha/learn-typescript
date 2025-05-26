/* Generics allow us to define resusable functions and classe that work with multiple types rather than a single type */

// Examples of built-in generics
const num: Array<number> = []
const colors: Array<string> = []

function identity<T>(item: T): T { // T stands for Type
    return item;
}

// console.log(identity<string>("max"))
// console.log(identity<number>(6))
// console.log(identity<boolean>(true))

// Return a random element from an array
// function getRandomElement<T>(arr: Array<T>): T { // the same as below
function getRandomElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}

// console.log(getRandomElement<number>([1,2,3,4,5,6,7,8,9,10]));
// console.log(getRandomElement<string>(["A","B","C","D"]));
// console.log(getRandomElement(["A","B","C","D"]));

//////////////////////////////////////////////////////////////////
/* Generics with Multiple Types */
function merge<T,U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

// const comboObj = merge({name: 'Pasha'}, {pets: ["blue", "elton"]})
// console.log(comboObj);

//////////////////////////////////////////////////////////////////
/* Adding Constraints for Generics*/
// 'extends object' adds constraint that it must be an object
function mergeObjects<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

// console.log(mergeObjects({name: 'Pasha'}, {num: 8}))

// using interface as constraint 
interface Lengthy {
    length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

// console.log(printDoubleLength("234"))

//////////////////////////////////////////////////////////////////
/* Default Type Parameters*/
// 'T = number' allows to specify a default type
function makeEmptyList<T = number>(): T[] {
    return [];
}

const emptyString = makeEmptyList();
// emptyString.push('abs')

//////////////////////////////////////////////////////////////////
/* Writing Generic Classes*/
interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(element: T) {
        this.queue.push(element);
    }
}

const songs = new Playlist<Song>();
songs.add({title: 'Drip Too Hard', artist: 'Lil Baby x Gunna'})

const videos = new Playlist<Video>();