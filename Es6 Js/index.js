import { Teacher } from "./teacher";

const person = {
    name:"Victor",
}

person.walk();//will return the object reference of object person due to 'this' keyword

const walk = person.walk
walk();//will return a global object which is the window object but if js is in strict mode, it will return undefined since it is not pointed to any other object

//in js functions are objects
// - they have properties and methods we can use
//with the 'bind()' method we can set the value of 'this' permanently

//when we call bind on the walk function, a new function 'walkTwo' is created and the value of this is based on the value that we passes to the bind method
//the walkTwo function is now bound to the person object, when you call it you get the person object refence
const walkTwo = person.walk.bind(person)
walkTwo();

//filter method and arrow function
const jobs = [{id:1,isActive:true},{id:2,isActive:true},{id:3,isActive:false}]
const activeJobs = jobs.filter(job => job.isActive)

//arrow function does not rebind the this keyword.It uses this in the context of how code is defined
const personOne = {
    name:"Victor",
    talk(){
        setTimeout(()=>{
            console.log('this',this);
        },1000)
    }
}

personOne.talk();

//map keyword
const colors = ['red','green','blue']
const items = colors.map(color => `<li>${color}</li>`)

console.log(items);

//object destructuring
const address = {
    street:"tom mboya",
    country:"kenya",
    city:"nairobi"
}

// const myStreet = address.street
// const myCity = address.city
// const myCountry = address.country

//instead of doing the above you can destructure the object like below
const {street:myStreet,city,country} = address

//spread operator
//combine arrays
const first = [1,2,3]
const second = [4,5,6]

const combinedA = first.concat(second)
const combined = [...first,'a',...second]

//combine objects
const firstObj = {name:'Mark'}
const secondObj = {job:'developer'}

const combinedObj = {...firstObj,...secondObj,location:"kenya"};
console.log('combinedObj:',combinedObj);

//clone objects using the spread operator
const objClone={...firstObj}

//classes
// class Person{
//     constructor(name){
//         this.name=name
//     }    
//     walk(){
//         console.log('this');
//     }
// }

// const person1 = new Person('vic');
// person1

// //inheritance
// class Teacher extends Person{

//     constructor(name,degree){
//      super(name)//calling the constructor of the parent class
//      this.degree = degree
//     }

//     teach(){
//         console.log('teaches');
//     }
// }

const teacher = new Teacher("Eddy","nursing");
teacher.teach();
console.log(teacher.teach());
