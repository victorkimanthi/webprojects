function createAnotherUser(user) {
    console.log(user.email);
    return { name: user.name, email: user.email, isActive: true };
}
//  createAnotherUser({name:"",email:"",isActive:true})
var user1 = createAnotherUser({ name: "Victor", email: "vic@com", isActive: true });
console.log(user1);
