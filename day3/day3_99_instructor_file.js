// what is an array?
// An array is an ordered list of values 
// that you refer to with a name and an index.

// creating arrays
let days = ["Monday", "Tuesday"
            , "Wednesday", "Thursday"
            , "Friday", "Saturday"
            , "Sunday"];

console.log(days);
console.log("\n");

let arr = new Array(10);
console.log(arr.length);
console.log("\n");

// accessing the value by index
// index begins at 0
console.log(days[5]);
console.log("\n");

for(let i = 0; i < days.length; i++) {
    console.log(`Today is ${days[i]}`);
}
console.log("\n");

// for each is a useful method
days.forEach(function(day, idx) {
    console.log(`The day ${idx + 1} is: ${day}`);
});
console.log("\n");

arr[0] = "some value";
console.log(arr);
console.log("\n");

// add elements
let arr2 = [];
arr2[1] = "Blah";
console.log(arr2);
console.log("\n");

// Utility methods provided by Array object
arr3 = [1, 2, 3].concat([4, 5, 6]);
console.log(arr3);
console.log("\n");

daysStr = days.join(" ");
console.log(`The days of the week are: ${daysStr}`);
console.log("\n");

weekDays = days.slice(0, 5);
console.log(`The weekdays are: ${weekDays.join(' ')}`);
console.log("\n");

// multi-dimensional arrays
let a = new Array(4)
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4)
  for (let j = 0; j < 4; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}
console.log(a);


// TODO - how to add items and and remove items from the start of an array
// TODO - how can we use splice to insert a value at a desginated point in the list
// TODO - how to copy an entire array using slice

// sets

let mySet = new Set();
mySet.add('apple');
mySet.add('banana');
mySet.add(10);
mySet.add('orange');
console.log(mySet);
console.log("\n");

mySet.delete('orange');
console.log(mySet);
console.log("\n");

for(let item of mySet) {
  console.log(item);
}
console.log("\n");

for (let item of mySet.values()) {
  console.log(item)
}
console.log("\n");

// maps

let flowerMap = new Map();
flowerMap.set('rose', 'pink');
flowerMap.set('jasmine', 'white');
flowerMap.set('hibiscus', 'red');
flowerMap.set('marigold', 'orange');

console.log(flowerMap);
console.log("\n");

for(let flower of flowerMap.keys()) {
  console.log(`A ${flower} is ${flowerMap.get(flower)}`);
}

flowerMap.set('rose', 'yellow');
console.log("\n");

for(let flower of flowerMap.keys()) {
  console.log(`A ${flower} is ${flowerMap.get(flower)}`);
}

let myArray = [1, 2, 3, 11, 1, 1, 2, 3];
let cleanArray = new Array();

for(let num of myArray) {
    if(cleanArray.indexOf(num) == -1) {
        cleanArray.push(num);
    }
}
console.log(cleanArray);

let cnt = 0, index = 0;

while(cnt < myArray.length) {
    console.log(myArray[cnt]);
    //if()
    cnt++;
}





//time to understand and run is 15 mins  
//practice code is good
//useful is comaparision
//good for this
