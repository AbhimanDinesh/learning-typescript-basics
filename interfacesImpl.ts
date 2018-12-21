class Dinesh implements Employee {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(): string {
        return 'Hello ' + this.firstName + ' ' + this.lastName;
    }

    getFirstName(): string {
        return this.firstName;
    }
}