


//this function acts as an object
let f = function(){
    this.a = 1;
    this.b = 2;
}

let o = new f()//acts as object constructor
o.d = 5; //creating property using instance

//now creating prototype property
f.prototype.b = 3;//override property b if it doesnt exists
f.prototype.c = 4;//create prototype c

console.log(o.b) //2


/**     PROTOTYPE INHERITANCE */

let car = {
    wheel : "four",
    model : "BMW"
}

let bike = {
    cc : 250
}

//specify __proto__ property to bike object
bike.__proto__=car;
console.log(bike) //cc : 250
console.log(bike.cc) // 250

//access car property using bike object
console.log(bike.wheel)
console.log(bike.model)

