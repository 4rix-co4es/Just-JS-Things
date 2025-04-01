/** FUNCTION ARGUMENTS */

// default arguments
function Main(x){
return 'in function : Main = ${x}';
}

console.log(Main()); //in function : Main = undefined

function Main(x="default"){
    return 'in function : Main = ${x}';
    }
    
    console.log(Main());//in function : Main = default
    


    function Main(x=3){
        return 'in function : Main = ${x}';
        }
        
        console.log(Main(10)); // 3 - since its default
