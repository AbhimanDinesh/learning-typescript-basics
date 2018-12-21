"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    // no variables declared explicitily.
    // by declaring a consructor with some arguments with scope, TS assumes the arguments and its scope as the variables 
    // hence empty constuctor. no need to write assignmnet code inside the constructor.
    // it will automatically create the variable as per constructor args and assigns the value to them
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
exports.Person = Person;
// inheritance + polymorphism
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'Programmer';
        return _this;
    }
    // function overridding
    Programmer.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName + ' I am a programmer';
    };
    // calling overrided function of parent class using 'super' keyword'
    Programmer.prototype.getPersonFullName = function () {
        return _super.prototype.getFullName.call(this);
    };
    return Programmer;
}(Person));
exports.Programmer = Programmer;
// creating objects
var person1 = new Person('Dineshbabu', 'Rajasekar'); // need to pass number of args to the constr as it is declared.
var programmer1 = new Programmer('Dinesh', 'Rajasekar'); // since programmer extends person, it can be holded by person variable
var programmer2 = new Programmer('Dinesh', 'Rajasekar'); // though programmer is a person, extra variables and functions wil not be avaialble if it is holded by person
console.log(person1.getFullName()); // calling parent method
console.log(programmer1.getFullName()); // calling overridden function from child
console.log(programmer2.getPersonFullName()); // calling parent's overridden function from child
