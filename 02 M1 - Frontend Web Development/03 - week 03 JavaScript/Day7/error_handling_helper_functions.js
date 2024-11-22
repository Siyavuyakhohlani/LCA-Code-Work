// TODO: Create a function that validates user input

function validateUserInput(input){
    if(typeof input !=="string"){
        return "invalid user input: the user input must be a string!"
    }else if(input.trim() ===""){
        return "invalid user input: the user input cannot be empty!"
    }else{
        return "user input is valid"
    }
}

console.log(validateUserInput("John"));
console.log(validateUserInput(2657682));
console.log(validateUserInput(" "));

// TODO: Create a function that demonstrates multiple error types

function demoError(){
    let   n = 5;
    try{
        console.log(n*"2");
    }catch(error){
        console.log("TypeError:", error.message);  
    }
    try{
        console.log(undefinedVar);
    }catch(error){
        console.log("ReferenceError:", error.message);
    } 
    let list = [1,2,4] 
    try {
        list.length = -1
    } catch (error) {
        console.log("RangeError:", error.message);
    }  
}

// TODO: Create a collection of helper functions for string manipulation

//convert a string to lower case
function toLowerCase(str){
    return str.toLowerCase();
}

//convert a string to upper case
function toUpperCase(str){
    return str.toUpperCase();
}

//reverse a string
function reverseString(str){
    return str.split("").reverse().join("");
}

//trim whitespace from both ends of a string

function trimString(str){
    return str.trim();
}
console.log(toLowerCase("SOUTH AFRICA"));
console.log(toUpperCase("Dream it possible"));
console.log(reverseString("Cape Town"));
console.log(trimString(" love "));

// TODO: Create helper functions for array operations

//find max
function findMax(arr){
    return Math.max(...arr);
}

// find min
function findMin(arr){
    return Math.min(...arr)
}
// find average of an array 
function findAverage(arr){
    let average = (arr.reduce((a,b)=> a+b,0))/arr.length;
    return average;
}

//get sum of an array
function getsum(arr){
    return arr.reduce((a,b) => a+b, 0)
}
//remove duplicate element from an array
function removeDuplicate(arr){
    return [...new Set(arr)];
}

let numbers =[1, 2, 2, 3, 4, 5, 6]
console.log(findMax(numbers));
console.log(findMin(numbers));
console.log(findAverage(numbers));
console.log(removeDuplicate(numbers));
console.log(getsum(numbers));


