// set of certain constant values of same type
enum DaysOfWeek {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

// though values of enum are string, we cannot afford them into a string variable.
// name of the enum is actually forms a type
let day: DaysOfWeek;
day = DaysOfWeek.MONDAY;


// basically at the back, enum will be converted into an object with the constant values being the keys,
// and the consequitive number (starting from 0) being values.
console.log(DaysOfWeek.MONDAY);
console.log(DaysOfWeek);


// this value numbers can be customized by our own as below example
enum Vowels {
    A = 100, E = 105, I = 109, O = 115, U = 121
}
console.log(Vowels.A);
console.log(Vowels);
