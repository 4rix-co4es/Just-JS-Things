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


/**     DESTRUCTING ARGUMENTS */
        
//declare object
    const o = {
        w1 : "Aj",
        w2 : "Tbj",
        w3 : "Pkd"
    }

    function getData({w1,w2,w3}){
        return `${w1}${w2}${w3}`;
    }
    console.log(getData(o));


    const arr = ["aj","tbj","pkd"];

    // specify {} square brackets when you declare destructured array
    function getData({w1,w2,w3}){
        return `${w1}${w2}${w3}`;
    }
    console.log(getData(arr));


    
