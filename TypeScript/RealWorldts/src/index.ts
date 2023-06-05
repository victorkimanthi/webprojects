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

    protected _courseCount = 1
    readonly city: string = "Miles"
    constructor(
        public email:string,
        public name:string,
        // private userId:number
        ){
    }

    //private method
    private deleteToken():void{
        console.log("Token deleted");        
    }

   //getters 
    get getEmail():string{
        return `${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    //setters

    set courseCount(courseNum){
      if(courseNum <= 1){
        throw new Error("Course count should be more than 1")
      } 
      this._courseCount = courseNum
    }
}

//the protected access modifier allows a property to accessed in the class it is created in and the classes that inherit that class
class SubPerson extends Person{
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
const person1 =  new Person("vi.com","victor")
// person1.deleteToken();
