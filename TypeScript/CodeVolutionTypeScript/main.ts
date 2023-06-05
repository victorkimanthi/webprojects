var message = 'Hello world'
console.log(message);

let isBeginner:boolean =true
// isBeginner = "no"

enum Color {Red,Green,Blue};

let c: Color = Color.Green;
console.log(c);

let a;
a = 2
a = true


//ts allows for parameters to optional by adding a question mark after the parameter
function add(num1:number, num2?:number):number{
if (num2)
   return num1 + num2
   else
   return num1;
}

//default parameters are like optional parameters with a set value instead of undefined
function add2(num1:number, num2:number = 10):number{
    if (num2)
       return num1 + num2
       else
       return num1;
    }

add(5,10);
add(5);
console.log(add(5,10));


add2(3,4); 
add2(3);
console.log(add2(2));

//interfaces
 //An interface can be defined to be used as a type in multiple functions

 interface Person {
    firstName: string;
    lastName:string;
 }

 function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);
    
 }

 let p = {
    firstName : 'Bruce',
    lastName:'wayne'
 }
 
 fullName(p);

 //classes
 class Employee {
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
        
    }
 }

 let emp1 = new Employee('Vishwas')
 console.log(emp1.employeeName);
 emp1.greet();

 //Because of classes,it is possible to have class based inheritance
 class Manager extends Employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log("Manager delegating tasks");
        
    }
 }

 let m1 = new Manager('Bruce');
 m1.delegateWork();
 m1.greet();
 console.log(m1.employeeName); 

 export {}

 