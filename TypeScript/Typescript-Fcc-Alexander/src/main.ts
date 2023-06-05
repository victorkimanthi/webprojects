//UNION & TYPE ALIASES

type ID = String
type PopularTag = String
type MayBePopularTag = PopularTag | null

interface UserInterface {
    id:ID;
    name:string;
    surname:string;
}

const popularTags:PopularTag[] = ["dragon","coffee"];

// const dragonsTag:MayBePopularTag = "dragon"
const dragonsTag:MayBePopularTag = null 

//TYPESCRIPT WORKING WITH DOM
//The whole work with DOM using ts is just about using the type oparator to say what type you have because ts doesn't have access to our markup 
//We use ts to static analyse our code,so we first need to define the correct types of our DOM elements and then ts can say whether that element has that property or not.

//sample 1
const someElement = document.querySelector(".foo") as HTMLInputElement

console.log("someElement",(someElement as any ).value); //this is wrong as it switches off typescript

console.log("someElement",someElement.value);

//sample 2
const someElementTwo = document.querySelector(".foo")
someElementTwo.addEventListener("blur",(event) => {
    const target = event.target as HTMLInputElement
    console.log("event",target.value);
    
})

//use readonly keyword in js to make a property constant/unchangeable

//GENERICS 
//make a function generic
// const addId =<T> (obj:T) =>{
const addId =<T extends object > (obj:T) =>{

    const id = Math.random().toString(16);
    return {
        ...obj,id
    }
}

interface UserTwoInterface{
name:string
}

const user:UserTwoInterface = {
    name:"Jack"
}

// const result = addId<UserTwoInterface>(user);
// const result = addId<string>('mosh');
const result = addId<UserTwoInterface>(user);

console.log("result",result);

//make interfaces generic
//generics allows us to provide different data types
//without this, one would be required to create multiple interfaces for each data type or create a basic on and then extend  everytime which is not flexible and requires more code
interface UserThreeInterface<T>{
   name:string,
   data:T
}

const user3:UserThreeInterface<{meta:string}>= {
    name:"Jack",
    data:{
      meta:"fcc"
    }
}

const user4:UserThreeInterface<string[]>= {
    name:"John",
    data:['apple','orange','lemon']
}

const user5:UserThreeInterface<string>= {
    name:"John",
    data:'apple'
}

//sample
//its possible to pass multiple argument types in generic interfaces
interface UserFourInterface<T,V>{
    name:string,
    data:T,
    meta:V
 }

 const userOne:UserFourInterface<string,number[]>= {
    name:"John",
    data:'apple',
    meta:[1,2,3]
}

// export function append<T> (element:T,list:readonly T[]):T[];

//sample 
const searchString = "foo"
// const hasSearchString = anyFunc<string>((element:string) => element.match(searchString),[
//     "merc","bmw","audi"])

enum StatusEnum{NotStarted,InProgress,Done}

//enum can be used as a data type and value
let notStartedStatus:StatusEnum = StatusEnum.NotStarted

//enums with interfaces

interface Task {
    id:string;
    status:StatusEnum;
}

 
