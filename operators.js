/* MEMBER ACCESS(.) */

//syntax

//object.property
const obj = {id:"1", name:"aj"}

console.log(obj.name) //aj


/* Computed Member Access[] */
console.log(obj["name"])

/* in operator */

const car = {cname:"BMW", model:"i8", year:2015}
console.log("cname" in car) //true


/* new operator */
class Model{
    constructor(){

    }
}
const c1 = new Model()
const c2 = new Model()



/** InstanceOf operator */
const d = new Date()
console.log(d instanceof Date) //true


/* delete operator */
delete car.cname
