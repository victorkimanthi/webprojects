//union type

let score:number | string = 33
score = 44
score = "55"

type User = {
    name:string;
    id:number
}

type Admin = {
    username:string;
    id:number
}

let userMe:User | Admin = {name:"Victor",id:40}

userMe = {username:"kimanthi",id:40}

//an example of a function using union type
function getId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase
    }
}

//arrays with union type
const data1: string [] | number[] = ["1","2","3"]
const data2: string [] | number[] = [1,2,3]
const data3: (string | number)[] = [1,2,"3"]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"  you can't assign another value to this variable



