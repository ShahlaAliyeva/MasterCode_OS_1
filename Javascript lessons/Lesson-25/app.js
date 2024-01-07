class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

class AcadameicCareer extends User {
    constructor(university, name, age) {
        super(name, age)
        this.university = university;
    }

    saySomething() {
        console.log(`My name is: ${this.name}, uni: ${this.university}`);
    }
}

let newUser = new AcadameicCareer('adnsu', 'admin', 21)