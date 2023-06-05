"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//this example shows the use of generics
//whatever value type  you pass as the parameter will be returned by the function
function identityFour(val) {
    return val;
}
//   function identityFive<Type>(val:Array<Type>):Array<Type>{
function identityFive(val) {
    return val;
}
function getSEarchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//arrow function
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function func1(valOne, valTwo) {
    return { valOne, valTwo };
}
func1(3, { connection: "ppp", username: "ddrrr", password: "wwww" });
