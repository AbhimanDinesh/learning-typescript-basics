export class Person {

    // no variables declared explicitily.
    // by declaring a consructor with some arguments with scope, TS assumes the arguments and its scope as the variables 
    // hence empty constuctor. no need to write assignmnet code inside the constructor.
    // it will automatically create the variable as per constructor args and assigns the value to them
    constructor(public firstName: string, public lastName: string) {

    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}


// inheritance + polymorphism
export class Programmer extends Person {
    type: string = 'Programmer';

    // function overridding
    getFullName(): string {
        return this.firstName + ' ' + this.lastName + ' I am a programmer';
    }

    // calling overrided function of parent class using 'super' keyword'
    getPersonFullName(): string {
        return super.getFullName();
    }
}

// creating objects
var person1: Person = new Person('Dineshbabu', 'Rajasekar'); // need to pass number of args to the constr as it is declared.
var programmer1: Person = new Programmer('Dinesh', 'Rajasekar'); // since programmer extends person, it can be holded by person variable
var programmer2: Programmer = new Programmer('Dinesh', 'Rajasekar'); // though programmer is a person, extra variables and functions wil not be avaialble if it is holded by person

console.log(person1.getFullName()); // calling parent method
console.log(programmer1.getFullName()); // calling overridden function from child
console.log(programmer2.getPersonFullName()); // calling parent's overridden function from child