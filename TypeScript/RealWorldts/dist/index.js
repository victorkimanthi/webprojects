"use strict";
//classes
// class Person {
//     public email:string
//     private name:string
//     readonly city: string = "Miles"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name = name
//     }
// }
// const me =  new Person("vi.com","victor")
// me.city = "nairobi"
// me.name
//access modifiers
class Person {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Miles";
    }
    //private method
    deleteToken() {
        console.log("Token deleted");
    }
    //getters 
    get getEmail() {
        return `${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setters
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
//the protected access modifier allows a property to accessed in the class it is created in and the classes that inherit that class
class SubPerson extends Person {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const person1 = new Person("vi.com", "victor");
// person1.deleteToken();
