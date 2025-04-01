/**
 *      ARROW NOTATION
    - omits the function keyword
    - if only a single param, you can omit the parentheses
    - if function only have a single statement, you can omit {}
 */
const f1 = () => "hey everyone!"
const f2 = arg => 'value of the arg : ${arg}'
const f3 = (arg1,arg2) => arg1*arg2



// USE BACKTICKS
const o = {
    name : "aj",
    Magic(){return `Hello ${this.name}`}
}
console.log(o.Magic())

const m1 = o.Magic;

console.log(m1===o.Magic)// TRUE
console.log(m1()); // Hello undefined - since reference is called without an object param
 
const m2 = o.Magic.bind(o);
console.log(m2()); // "Hello aj"
    
