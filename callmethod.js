function Magic(){
    return `Welcome, to ${this.name}`;
}

const obj1 = {name:"Obj1"};
const obj2 = {name:"Obj2"};

console.log(Magic()); // Welcome to
console.log(Magic.call(obj1)); // Welcome to Obj1
console.log(Magic.call(obj2)); // Welcome to Obj2
