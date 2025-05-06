import {Dog} from "./Dog"
import {ShelterDog} from "./ShelterDog"
import {add, multiply, divide} from "./utils"
console.log("FROM INDEX FILES")

const sharik = new Dog("Sharik", "Samoyed", 1)
sharik.bark()

console.log(add(4,5))
console.log(multiply(4,5))
console.log(divide(4,5))

const max = new ShelterDog("Max", "Pitbool", 1, "Vatican")
max.bark()