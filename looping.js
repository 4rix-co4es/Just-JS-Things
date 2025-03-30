/*
Looping Statements
    -while
    -do/while
    -for
    -for/in
*/

const obj = {a:1, b:2, c:3, d:4};

for(let o in obj){
    console.log(obj[o]);  //1 2 3 4
}


const ob = [1,2,3,4];
for(let o of ob){
    console.log(o); //prints array elements
}
for(let o in ob){
    console.log(o); //prints array index numbers
}

let str = "school";

for(let val of str){
    console.log(val);   //prints all characs of string
}