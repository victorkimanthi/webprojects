"use strict";
exports.__esModule = true;
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "vitor", isPaid: true });

//returning objects using functions
function createList() {
    return { name: "react.js", price: 490 };
}
//unexpected behaviours in js
var newUser = { name: "vitor", isPaid: true, id: 23 };
createUser(newUser);
function createAnotherUser(user) {
    console.log(user.email);
    return { name: "", email: "", isActive: true };
}
createAnotherUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "h",
    email: "h22@.com",
    isActive: false
};
myUser.email = "hhjj2@.com";
