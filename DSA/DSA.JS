// if else 

let marks = 75;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("Fail");
}

// AND (&&) condition

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
} else {
    console.log("Not Allowed");
}

// OR (||) condition

let isStudent = false;
let hasCoupon = true;

if (isStudent || hasCoupon) {
    console.log("Discount pabe");
}

//Ternary condition (short form)
let ages = 16;

let result = ages >= 18 ? "Adult" : "Child";

console.log(result);

//Nestet Ternary 

let  num = 0


let number = num>0?'posetive':num<0?'Negetive':'Zero'

console.log(number)


//switch 

let mode = "hard";

switch(mode) {
    case "easy":
        console.log("Easy Mode");
        break;

    case "medium":
        console.log("Medium Mode");
        break;

    case "hard":
        console.log("Hard Mode");
        break;

    default:
        console.log("Unknown Mode");
}


//Simple Loop

for(let i = 1; i <= 5; i++) {
    console.log(i);
} 

//Reverse Loop
for(let i = 5; i >= 1; i--) {
    console.log(i);
}

//Array Loop
let fruits = ["Apple", "Mango", "Banana"];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Sum Example
let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log(sum);



// Even Number Print
for(let i = 1; i <= 10; i++) {

    if(i % 2 === 0) {
        console.log(i);
    }

}

//Calculator Program
let num1 = 10;
let num2 = 5;
let op = "+";

switch(op) {

    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}

//epsilon compare
let num = 0.1 + 0.2;

if (Math.abs(num - 0.3) < Number.EPSILON) {
    console.log("hello");
}

//Array Traverse using while loop
let arr = [10, 20, 30, 40];
let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

//sum of arry
let arr = [1, 2, 3, 4];
let i = 0;
let sum = 0;

while (i < arr.length) {
    sum += arr[i];
    i++;
}

//Reverse Traversal
console.log(sum);

let arr = [1, 2, 3, 4];
let i = arr.length - 1;

while (i >= 0) {
    console.log(arr[i]);
    i--;
}

// Binary Search Example
let arr = [1,2,3,4,5,6,7];
let target = 5;

let left = 0;
let right = arr.length - 1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        console.log("Found");
        break;
    }

    if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

//Sum of Array
let arr = [1, 2, 3, 4];
let i = 0;
let sum = 0;

do {
    sum += arr[i];
    i++;
} while (i < arr.length);

console.log(sum);

//Reverse Traversal
let arr = [5, 4, 3, 2];
let i = arr.length - 1;

do {
    console.log(arr[i]);
    i--;
} while (i >= 0);