

// an object with basic properties
let simpleObj = {
    a: 1,
    b: 'string'
};

// nested object
let person = {
    name: 'my name',
    phone: '123-456-7890',
    address: {
        house: 'Flat# 301, Gulmohar Towers',
        street: 'Gandhi Road',
        city: 'Chennai'
    }
};


// function as a property
let objWithFn = {
    name: 'person',
    age: 32,
    greet: function() {
        console.log('Hello!');
    } 
};


var immutableString = "Hello";

// In the above code, a new object with string value is created.

immutableString = immutableString + "World";

// We are now appending "World" to the existing value.


