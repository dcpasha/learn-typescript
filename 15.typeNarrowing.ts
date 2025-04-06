/* 
'Typeof Guard' involves simply doing a type check before working with a value

- typeof is great when we work with primitives
*/

function tripple(value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
        return value * 3;
}

//////////////////////////////////////////////////////////////////
/* Truthiness Type Guard involves checking a value for being truthy or falsy before working with it
This is helpful in avoiding errors when values might be nulll or undefined.
*/
const printLetters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        console.log("You did not pass in a word");
    }
}

//////////////////////////////////////////////////////////////////
/* Equality Narrowing involves comparing types to each other before doing certain operations with values
*/
function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        console.log(x.toUpperCase())
    }
}
// someDemo("text", "text")

//////////////////////////////////////////////////////////////////
/* Narrowing with the IN operator
It allows you to work with interfaces
*/
const pet = {name: "Omi", age: 5}

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    // 'in' allows to narrow the type
    if('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

const movieDur = getRuntime({title: "Casablanca", duration: 102})
console.log(movieDur)
const showDur = getRuntime({title: "Friends", numEpisodes: 200, episodeDuration: 20})
console.log(showDur)

//////////////////////////////////////////////////////////////////
/* instaceof Narrowing 
instanceof is a JS operator that allows us to check if one thing is an instance of another
on the prototype chain

Works for things that we instantiate with 'new' 
*/

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString)
    } else {
        console.log(new Date(date).toUTCString)
    }
}

class User {
    readonly username;
    constructor(username: string) {
        this.username = username;
    }
}

class Company {
    readonly name;
    constructor(name: string) {
        this.name = name;
    }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.username);
    }
    else {
        console.log(entity.name);
    }
}

//////////////////////////////////////////////////////////////////
/* Typescript allows us to write custom functions that can narrow the type of a value.
These functions have a very special return ype called a type predicate

This feature is specific to TypeScript

It tells typescript if something has a certain type
*/

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

// make a reusable function
// 'pet is Cat' is our type predicate that takes the form 'parameterName is Type'!
function isCat(pet: Cat | Dog): pet is Cat { // predicate must be our return type
    // 'as' allows to assert it as Cat
    return (pet as Cat).numLives !== undefined; // must reutnr a boolean
} 

function makeNoise(pet: Cat | Dog): string {
    if (isCat(pet)){
        return 'Meow';
    } else {
        return 'Woof'
    }
}

//////////////////////////////////////////////////////////////////
/* Discrimated Unions - a common pattern in TS involves creating a literal property that is common
across multiple types.

We can then narrow the type using that literal property
*/
interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster" // discriminant 
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow" // discriminant 
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig" // discriminant 
}

type FarmAnimal = Pig | Rooster | Cow; // type alias

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind) {
        case('pig'):
            return 'Oink';
        case('cow'):
            return 'Moo'
        case('rooster'):
            return 'Cockadooledoo'
    }
}

const petuh: Rooster = {
    name: "Petuh Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}

console.log(getFarmAnimalSound(petuh))
