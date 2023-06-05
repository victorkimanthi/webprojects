function hasName(obj:any):obj is {name:string}{
       return !!obj && typeof obj === 'object' && "name" in obj
    
    }

    let myVariable:unknown = {
        car:'range',
        color:'black'
    }
    var person = { 
        firstname:"Tom", 
        lastname:"Hanks" 
     }; 

    if(hasName(person)){
        console.log(person.name);
        
    }