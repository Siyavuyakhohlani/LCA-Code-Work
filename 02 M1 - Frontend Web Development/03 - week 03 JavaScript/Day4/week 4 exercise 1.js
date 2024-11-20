// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
//all 3 numbers together. Note: The argument passed must NOT be the same numbers.

function multiply(a,b,c){
    return a*b*c
}
console.log(multiply(5, 3, 7));


// TODO: Create a function expression called ‘convertToSeconds’ that takes in a
// number of minutes as an argument and returns the amount in seconds. ***Do not
// use a console.log() inside of the function***

function convertToSeconds(minutes){
    return minutes * 60
}
console.log(convertToSeconds(20));

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as
// an parameter and returns the equivalent temperature in Celsius. ***Do not use a
// console.log() inside of the function***

function fahrenheitToCelsius(temperature){
    return (temperature - 32)* 5/9
}
console.log(fahrenheitToCelsius(38));

// TODO: Create a function that takes a string as a parameter and returns the reverse
// of the string. ***Do not use a console.log() inside of the function ***
function reverseString(name){
    return name.split('').reverse().join('');
}
console.log(reverseString('Siya'));


// TODO: Create a function that takes in a string and returns the number of Vowels in
// the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a
// console.log() inside of the function***

function countVowels(string){
    return string.toLowerCase().split('').filter(i => 'aeiou'.includes(i)).length;
}
console.log(countVowels('Siyavuya'));

// TODO: Create a “isPrime” function that takes a number as a parameter and returns
// true if the number is prime, and false otherwise. Make sure to test your code with 4
// numbers

function isPrime(number){
    if (number<= 1) return false;
    for (let i= 2; i <= Math.sqrt(number); i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(1));
