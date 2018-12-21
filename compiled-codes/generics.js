"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes"); // this is called modularity. we can use any classes from any file using 'import' keyword
// systax: import {class-name} from "filename with path"
// in order to import a class, the same class should be exported in that file. Check the class file for reference
// if you run this file, you can see in the console some statement are printed while there is no console.log in thie file.
// that is because, import is not just importing the class, it is actually running the class file
var classes_2 = require("./classes");
// generics allows for a function to accept and return type should be same but what ever the type can be
function echo1(arg) {
    return arg;
}
var resultEcho1 = echo1('Hello'); // works with string
var result2Echo1 = echo1(10); // works with number
console.log(resultEcho1);
console.log(result2Echo1);
// this can be done by simply using 'any'
function echo2(arg) {
    return arg;
}
// problem with the above 'any' function is, type is not bounded properly.
var result = echo2(10);
// it works fine since the return type is 'any' so holded by string type. 
// but ideally it should not because the actual return value from the function is number
// thats why we are going for generics. hence the below line will not work
// var result1: string = echo1(10);
// generics works for class type as well.
function echoPerson(person) {
    return person;
}
var person = new classes_1.Person('Dinesh', 'Rajasekar'); // creating a person object
var person2 = echoPerson(person); // thus generics works. function arg and return type are same. i.e., Person
// generics works for inheritence type also. say function can accept any type but those should extend one particular type (class)
function echoPerson2(anyPerson) {
    return anyPerson;
}
var person3 = echoPerson2(person); // Person type is acceptable
var programmer = new classes_2.Programmer('Dinesh', 'Rajasekar'); // programmer object that extends person
var programmer2 = echoPerson2(programmer); // Programmer type is also acceptable since it extends Person
