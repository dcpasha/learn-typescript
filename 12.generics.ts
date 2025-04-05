/* Generics allow us to define resusable functions and classe that work with multiple types rather than a single type */

// Examples of built-in generics
const num: Array<number> = []
const colors: Array<string> = []

function identity<Type>(item: Type): Type {
    return item;
}

console.log(identity<string>("max"))
console.log(identity<number>(6))
console.log(identity<boolean>(true))
