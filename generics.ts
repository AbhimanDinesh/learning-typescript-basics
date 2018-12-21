import { Person } from "./classes";  // this is called modularity. we can use any classes from any file using 'import' keyword
// systax: import {class-name} from "filename with path"
// in order to import a class, the same class should be exported in that file. Check the class file for reference
// if you run this file, you can see in the console some statement are printed while there is no console.log in thie file.
// that is because, import is not just importing the class, it is actually running the class file
import { Programmer } from "./classes";

// generics allows for a function to accept and return type should be same but what ever the type can be
function echo1<T>(arg: T): T {
    return arg;
}

var resultEcho1: string = echo1('Hello'); // works with string
var result2Echo1: number = echo1(10); // works with number
console.log(resultEcho1);
console.log(result2Echo1);

// this can be done by simply using 'any'
function echo2(arg: any): any {
    return arg;
}

// problem with the above 'any' function is, type is not bounded properly.
var result: string = echo2(10); 

// it works fine since the return type is 'any' so holded by string type. 
// but ideally it should not because the actual return value from the function is number
// thats why we are going for generics. hence the below line will not work
// var result1: string = echo1(10);


// generics works for class type as well.
function echoPerson<T>(person: T): T {
    return person;
}

var person: Person = new Person('Dinesh', 'Rajasekar'); // creating a person object
var person2: Person = echoPerson(person); // thus generics works. function arg and return type are same. i.e., Person


// generics works for inheritence type also. say function can accept any type but those should extend one particular type (class)
function echoPerson2<T extends Person>(anyPerson: T): T {
    return anyPerson;
}

var person3: Person = echoPerson2(person); // Person type is acceptable
var programmer: Programmer = new Programmer('Dinesh', 'Rajasekar'); // programmer object that extends person
var programmer2: Programmer = echoPerson2(programmer); // Programmer type is also acceptable since it extends Person
