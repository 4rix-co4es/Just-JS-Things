

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



function Hello(){
    return "hello";
}

//declare object with property
const object = { f: Magic };
console.log(object.f());  //call function  using object property



/**
        ANONYMOUS FUNCTION
 */
//function as an object property
const o = {
    name: "Anonymous function",
    invoke(){ return "You called me @.@"; }
}

console.log(o.invoke());


/**     CLOSURE FUNCTION  - a function inside a function     */
function Counter(){
    let count = 0;

    return function(){
        return count++;
    }
}

console.log(Counter()); 
// O/P- return count++;
//    }

let counter = Counter();

console.log(counter());//0
console.log(counter());//1
console.log(counter());//2



let closure;
{
    let block = "characters";

    closure = function(){
        console.log(block);
    }
}

console.log(block);     // reference error
closure();

// Ex :
let fn;
{
    let obj = {name :"Charac"}

    //arrow func
    fn = () =>{
        return obj;
    }
}

console.log(fn());
// O/P :
// {name:"charac"}

let ref = fn();
console.log(ref.name); //charac  - can access block scope variable(ref.name)


/**     MAP FUNCTION */
