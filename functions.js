

function Magic(){
    return "This function";
}
Magic();  

console.log(Magic()); // This function

// references to the function, will not execute body of the function
console.log(Magic);  // displays =>
    // function Magic(){
    //     return "This function"
    // } 
    

//assign reference to the variable
const f = Magic;
//executes the  function
console.log(f()); // now we have reference to the function

/**
        ANONYMOUS FUNCTION
 */
//function as an object property
const o = {
    name: "Anonymous function",
    invoke(){ return "You called me @.@"; }
}

console.log(o.invoke());
