// Instructions:
// TODO: Create a function called sum. The function will take in a parameter and
// calculate all the numbers from 0 -> the parameter. You must check if the parameter is
// an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to
// use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
// to test your code effectively.

function sum(num){
    if(typeof num !== 'number' || num%1 !== 0){
        return 'the value is not a number'
    }
    let total = 0;
    for (let i=0;i<=num;i++ ){
        total += i;
    }
    return total;
}
console.log(sum(9));

//TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->
// 4*3*2*1 //output 24

function factorial(x){
    let sum = 1
    for(let i=2; i<=x;i++){
        sum *=i;
       
    }
    return (sum)
}
console.log(factorial(0));

// TODO: Create a function called funkyMath . If this function is called with 2
// arguments the function will subtract the first from the second. If the function is called
// with 3 arguments it will add all 3 numbers together. If the function is called with 4
// arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
// them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funkyMath(a,b,c,d){
    if(arguments.length == 2){
        return b-a;
    }else if(arguments.length == 3){
        return a+b+c;
    }else if(arguments.length ==4){
        return (a+b)/(c+d);
    }
}

//test result
console.log(funkyMath(1,4));
console.log(funkyMath(4,3,5));
console.log(funkyMath(1,4,3,9));


// TODO: Create a loop that will remove all the odd numbers from the array and add
// them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()

let myArray = [1, 2, 33, 45, 6, 44];
let newArray= [];

for(let i = 0; i< myArray.length; i++){
    if (myArray[i]%2 !==0) {
        newArray.push(myArray[i]);
    }
}
newArray.sort((a,b)=> a-b)
console.log(newArray);

/* TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, */

let me ={
    firstName: "Siyavuya",
    lastName: "Khohlani",
    age: 25,
    favouriteColor: "Baige",
    dreamCar: "Audi"
}
me.favFood = "uMvubo";
delete me.age;
console.log(me);

