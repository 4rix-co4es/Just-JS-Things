// Simple Literal
/*
5.30 - number literal
"daily" - string literal
*/

// unary negation:
// if y=10 then -y will be -10

//unary plus
//if y=-10 then y will be 10

//pre-increment : right to left
let j;
x=5;
j=++x; //j=6

//post-increment : left to right
j=x++; //j=5

//pre-decrement
//post-decrement same as increments


/*
Comparison Operator

Strict Equality (===), (!==)
Abstract Equality(==), (!=)
Relational  

*/
//Strict Equality (===), (!==)
let x=10, str="10"
console.log(x==str) //true, doesnt see the numerical value 10 but only cus of same look "10"
console.log(x===str) //false, because x is number and str is string. They dont have same type


// converting Str into Number
console.log(x===Number(str))// true, since x and str have same type and value now.
console.log(x!==Number(str))// false

/*  typeof Operator 

    undefined
    null
    boolean
    number
    string 
    symbol
    object


*/

console.log(typeof 1) //number
console.log(typeof "Daily") //string
console.log(typeof function(){}) //function


/* DESTRUCTING ASSIGNMENT OPERATOR */

//normal obj declaration
const obj = {a:1, b:2, c:3}

//destructing
const {a,c,d}=obj

console.log(a)
console.log(b)  // err : b is not defined
console.log(c)

//but
console.log(d) //undefined


//destructing in array
const arr=[1,2,3,4,5,6,7]

//let [p,q] = arr

console.log(p)
console.log(q) 
console.log(r) // r is not defined (since its not in object array declaration)

//let [p,q,...rest] = arr
console.log(rest); // 4 5 6 7