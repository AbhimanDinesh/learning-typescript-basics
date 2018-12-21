"use strict";
function welcome() {
    console.log("Hello world! Welcome to learn Typescript");
}
var a; //a can accept value of type number only
var b; //b can accept value of type boolean
var c;
// valid assignments
a = 10;
b = true;
c = 'Dinesh';
// invalid assignments
/* a = "String";
b = 10; */
// aruguments of a function can be restricted to the certain type
// return type of the function can also be typed
// optional functional arguments
// function can accepts any number of arguments as optional
// but optional arguments should be at the last
// it is denoted by '?'
// default value can also be assigned to an optional arg, so that it is substitued when value to it is not passed
// default value is denoted by replacing '?' with '=' + value
function add(a, b, c) {
    return a + b;
}
function mul(a, b, c) {
    if (c === void 0) { c = 1; }
    return a * b * c;
}
// call without optional arg
var addResult1 = add(1, 2);
var mulResult1 = mul(2, 2);
// cal with optional arg
var addResult2 = add(1, 2, 3);
var mulResult2 = mul(2, 2, 2);
welcome();
console.log(addResult1);
console.log(mulResult1);
console.log(addResult2);
console.log(mulResult2);
