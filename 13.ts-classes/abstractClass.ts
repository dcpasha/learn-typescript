abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
    greet(){
        console.log("Hi!")
    }
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, public  salary: number) {
        super(first, last);

    }
    getPay(): number {
        return 12;
    }
}

class PartTimeEmployee extends Employee {
    getPay(): number {
        return 5;
    }
}
