const scores:Array<number> = []
const names:Array<string> = []

function identityOne(val:boolean | number):boolean | number{
  return val
}

function identityTwo(val:any):any{
    return val
  }

  function identityThree<Type>(val:Type):Type{
    return val
  }

  //this example shows the use of generics
  //whatever value type  you pass as the parameter will be returned by the function
  function identityFour<T>(val:T):T{
    return val
  }

//   function identityFive<Type>(val:Array<Type>):Array<Type>{
  function identityFive<Type>(val:Type[]):Type[]{ 
    return val
  }

  function getSEarchProducts<T>(products:T[]):T{ 
    const myIndex = 3
    return products[myIndex]
  }

  //arrow function
  const getMoreSearchProducts = <T,>(products: T[]):T => {
    const myIndex = 4
    return products[myIndex]
  }

  interface Database{
    connection: string,
    username: string,
    password: string
  }

  function func1<T,U extends Database>(valOne:T,valTwo:U):object{
    return{valOne,valTwo}
  }

  console.log(func1(3,{connection:"ppp",username:"ddrrr",password:"wwww"}))
  
    
   