import { Dog } from "./Dog";

export class ShelterDog extends Dog {
    constructor(
        name: string,
        breed: string,
        age: number,
        public shelter: string,
    ) {
        super(name, breed, age);
    }
}