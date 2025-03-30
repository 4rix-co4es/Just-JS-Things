

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
