interface User{
    readonly dbId:number,
    email:string,
    userId:number
    googleId?:string
    //startTrail:() => string
    startTrail():string
    getCoupon(couponName:string):number
}

interface User{
    gitHubToken:string
}

interface Admin extends User{
    role:"admin" | "ta" | "learner"
}

const me:User = {
dbId:22,
email:"hhh.com",
userId:2,
gitHubToken:"github",
startTrail:() =>{
    return "trail started"
},
getCoupon: (couponName:"laptop10   ") =>{
    return 10
}
}

const me2:Admin = {
    dbId:22,
    email:"hhh.com",
    userId:2,
    role:"admin",
    gitHubToken:"github",
    startTrail:() =>{
        return "trail started"
    },
    getCoupon: (couponName:"laptop10 ") =>{
        return 10
    }
    }

me.email="gg.com" 