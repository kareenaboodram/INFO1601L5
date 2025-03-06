let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
let name = "Kareena";
let age = 19;

console.log(typeof(name)); // string
console.log(typeof(age));  // number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
// Hello my name is Kareena I'm 19 years old.

console.log(`I was born in ${2025 - age}`);
// I was born in 2005

console.log('1' == 1); // true
console.log(1 == true); // true
console.log("false" == false); // "false" is not false
console.log("false" == true); // "false" is not true either

if("false")
   console.log("Hello false!"); // but "false" is true enough here
console.log('1' === 1); // false
console.log(1 === true); // false
console.log("true" === true); // false

for(let i = 0; i < 50; i++){
    if(i % 3 === 0 && i % 5 === 0){ 
      console.log('fizzbuzz');
    } else if(i % 3 === 0){ 
      console.log('fizz');
    } else if(i % 5 === 0){ 
      console.log('buzz');
    } else {              
      console.log(i);
    }
}

function happyPrint(string){
    console.log("😀: " + string);
}
   
function sadPrint(string){
    console.log("😢: " + string);
}
   
function add(a, b, callback){
    let ans = a + b;
    callback(ans);
}
   
add(5, 10, happyPrint);
add(11, 12, sadPrint);

// Prints current date
function printDate(){
    console.log(new Date().toLocaleTimeString());
}
       
setInterval(printDate, 1000);

let arr = [-5, 16, 33, 42, 103, 344];

console.log(arr.includes(-5)); // true

arr.push(11); // Adds item to the end

console.log(arr); // [ -5, 16, 33, 42, 103, 344, 11 ]

let lastItem = arr.pop(); // Removes last item

console.log(lastItem, arr); // 11, [ -5, 16, 33, 42, 103, 344 ]

arr.unshift(22); // Adds item to the front

console.log(arr); // [ 22, -5, 16, 33, 42, 103, 344 ]

let firstItem = arr.shift(); // Removes first item
console.log(firstItem, arr); // 22, [ -5, 16, 33, 42, 103, 344 ]

let reversed = arr.reverse(); // Creates a new array in reverse order 
console.log(reversed); // [ 344, 103, 42, 33, 16, -5 ]
console.log(arr.join('-')); // "-5-103-16-33-344-42"

arr = [12, 33, 4, 5, -4, 8, 19, 25];

// map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return num % 2 !== 0; 
}

// Filter takes a test condition and returns only the elements that make the condition true
let odds = arr.filter(isOdd);
console.log(odds);

// Returns true or false if any of the elements of the array meet a specified condition
function has5Factor(num){
  return num % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

// sort function must return either 0, +ve, or -ve
let ascending = arr.sort(intCompare);
console.log(ascending);

// Function to create a person object
function createPerson(name, height, weight) {
    return { name: name, height: height, weight: weight };
}
  
function calcBMI(weight, height) {
    return weight / (height * height);
}
  
function avgBMI(people) {
    let sum = 0;
    for (let person of people) {
      sum += calcBMI(person.weight, person.height);
    }
    return sum / people.length;
}
  
// Create a collection of people
let people = [
    createPerson("Sally", 2.5, 60),
    createPerson("Ben", 3, 81),
    createPerson("Shelly", 1.7, 50)
];
  
console.log(avgBMI(people));

// Object literals
let bob = {
    fname: "bob",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1603',
        grades: [89, 34, 67]
      },
      {
        course: 'INFO 1601',
        grades: [89, 34, 67]
      }
    ]
};
  
let sally = {
    fname: "sally",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1601',
        grades: [100, 89, 79]
      }
    ]
};
  
let paul = {
    fname: "paul",
    lname: "smith",
    age: 18,
    height: 6,
    transcript:[
      {
        course: 'INFO 1600',
        grades: [89, 34, 67]
      }
    ]
};
  
const students = [bob, sally, paul];
