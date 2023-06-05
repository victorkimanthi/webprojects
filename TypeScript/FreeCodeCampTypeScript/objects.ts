function createUser({name: string, isPaid: boolean}){}
 
createUser({name:"vitor",isPaid:true})

//returning objects using functions
function createList():{name: string, price: number}{
    return {name:"react.js",price : 490}
}

 //unexpected behaviours in js
let newUser = {name:"vitor",isPaid:true,id:23}
 createUser(newUser)

 //type aliases
 type User = {
    name:string,
    email:string,
    isActive:boolean
 }

 function createAnotherUser(user:User):User
 { 
    console.log(user.email);
    
    return {name:"",email:"",isActive:true}
 }
  
 createAnotherUser({name:"",email:"",isActive:true})

 //readonly and optional
 type Users = {
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean
    creditDetails?:number// add a question mark to make the field optional
 }

 let myUser:Users = {
    _id :"1234",
    name:"h",
    email:"h22@.com",
    isActive:false
 }

  myUser.email = "hhjj2@.com"
//   myUser._id = "hhjj2@.com"

//you can combine several types to make a new type

type cardNumber = {
    cardNumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

export {}