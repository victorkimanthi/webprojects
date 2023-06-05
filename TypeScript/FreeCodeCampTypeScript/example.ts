type User = {
    name:string,
    email:string,
    isActive:boolean
 }

 function createAnotherUser(user:User):User
 {  
    console.log(user.email);
    
    return {name:user.name,email:user.email,isActive:true}
 }
  
//  createAnotherUser({name:"",email:"",isActive:true})
               
 let user1 =  createAnotherUser({name:"Victor",email:"vic@com",isActive:true})

 console.log(user1); 

 //arrays
 const superHeroes: string [] = []
//  const superHeroes: Array<string> = [] this is an alternative way of defining an array

 superHeroes.push("spiderman")

 const allUsers:User[] = []

 allUsers.push({name:"Mike",email:"mike@.com",isActive:true})

 const arrayOfArrays : number[][] = [[1,2,3],[4,5,6]]

 export {}