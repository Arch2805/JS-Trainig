
let obj1 = {};
console.log(obj1);
console.log(`obj1 type ${typeof obj1}`);

let obj2 = new Object();
console.log(obj2);
console.log(`obj2 type ${typeof obj2}`);

let obj3 = Object.create(null);
console.log(obj3);
console.log(`obj3 type ${typeof obj3}`);

// basic properties
let simpleObj = {
    a: 1,
    b: 2
};
console.log(simpleObj);

// function as a property
let objWithFn = {
    name: 'person',
    age: 32,
    greet: function() {
        console.log('Hello!');
    } 
};
console.log(objWithFn);
objWithFn.greet();

// nested object
let person = {
    name: 'my name',
    phone: '123-456-7890',
    address: {
        house: 'Flat# 301, Gulmohar Towers',
        street: 'Gandhi Road',
        city: 'Chennai'
    }
}
console.log(person);

// "this" provides a context
// to a function
function cook(technique) {
    console.log(`I am ${technique} this ${this.name}`);
}

// function as a property
var objWithFn = {
    name: 'Ashik',
    age: 32,
    greet: function() {
        console.log(objWithFn);
        console.log(`Hello! I am ${this.name}`);
        console.log(objWithFn == this);
    } 
};
//console.log(objWithFn);
objWithFn.greet();
//console.log(objWithFn.name);

// function as a property
var objWithFn = {
    name: 'Ashik',
    age: 32,
    greet: function() {
        console.log(objWithFn);
        console.log(objWithFn == this);
        //console.log(`Hello! I am ${this.name}`);
    } 
};
//console.log(objWithFn);
objWithFn.greet();
//console.log(objWithFn.name);
objWithFn2 = objWithFn;
objWithFn = {};
objWithFn2.greet();

let a = 10;
let b = 10;
console.log(`Is a == b? ${a==b}`);