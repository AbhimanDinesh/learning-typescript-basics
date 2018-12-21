function welcome() {
    console.log("Hello world! Welcome to learn Typescript");
}

var a: number;  //a can accept value of type number only
var b: boolean; //b can accept value of type boolean
var c: string;

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
function add(a:number, b:number, c?:number): number { //here c is of type number and is optional but no default value assinged to it
    return a+b;
}

function mul(a:number, b:number, c:number = 1): number { //here c is of type number and is optional with default value
    return a*b*c;
}

// call without optional arg
var addResult1: number = add(1, 2);
var mulResult1: number = mul(2, 2);

// cal with optional arg
var addResult2: number = add(1, 2, 3);
var mulResult2: number = mul(2, 2, 2);
welcome();
console.log(addResult1);
console.log(mulResult1);
console.log(addResult2);
console.log(mulResult2);