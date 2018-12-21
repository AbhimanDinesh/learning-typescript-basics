"use strict";
// set of certain constant values of same type
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 0] = "SUNDAY";
    DaysOfWeek[DaysOfWeek["MONDAY"] = 1] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 6] = "SATURDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
// though values of enum are string, we cannot afford them into a string variable.
// name of the enum is actually forms a type
var day;
day = DaysOfWeek.MONDAY;
// basically at the back, enum will be converted into an object with the constant values being the keys,
// and the consequitive number (starting from 0) being values.
console.log(DaysOfWeek.MONDAY);
console.log(DaysOfWeek);
// this value numbers can be customized by our own as below example
var Vowels;
(function (Vowels) {
    Vowels[Vowels["A"] = 100] = "A";
    Vowels[Vowels["E"] = 105] = "E";
    Vowels[Vowels["I"] = 109] = "I";
    Vowels[Vowels["O"] = 115] = "O";
    Vowels[Vowels["U"] = 121] = "U";
})(Vowels || (Vowels = {}));
console.log(Vowels.A);
console.log(Vowels);
