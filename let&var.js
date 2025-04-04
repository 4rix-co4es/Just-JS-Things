


var v= 4;
//console.log(v)
//use before declaration

console.log(x) 

var x=4 // undefined
let x=4 // returns "Error is not defined"

//use let when using inside blocks. var is global
(function(){
    "use strict"

    x="global"
    console.log(x) // error msg - undefined
})()

