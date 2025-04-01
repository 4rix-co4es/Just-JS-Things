const obj = {};     //add properties to this object, values can be primitive or obj




let name = "aj";
let grade = "A";

// can also be declared globally as :
const user = {
    name :"aj",
    grade:"A"
}





obj.Age = 25; // property with value
console.log(obj.Age);

obj.Age; // property with Null Value
console.log(obj.Age);

       

const object = {
    name : "S", // key = name, value=S
    Age : 25
};

console.log(object.name);

// deleting property
delete object.name;

//array inside array
const arr = [
    [1,2,3],
    [4,5,6]
];

//arr.length

// display date
const now = new Date();
console.log(now);

const dt = new Date(2018, 9, 13);
console.log(dt);


// regex - search and replace operations on strings
//once u create a symbol it is unique and it will not match any other symbols


// Map, WeakMap, Set, WeakSet

const roles = new Map();

roles.set(t1, 'User1');
roles.set(t2, "User2");

const set1 = new Set();

set1.add("user1");
