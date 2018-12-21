"use strict";
var Dinesh = /** @class */ (function () {
    function Dinesh(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Dinesh.prototype.greet = function () {
        return 'Hello ' + this.firstName + ' ' + this.lastName;
    };
    Dinesh.prototype.getFirstName = function () {
        return this.firstName;
    };
    return Dinesh;
}());
