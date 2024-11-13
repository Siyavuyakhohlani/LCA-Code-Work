//question 1
let numbers = [1, 2, 3, 4];

numbers.forEach(numbers => {
    console.log(numbers);
    
});

//Question 2
let coolCars = ["BMW", "Bugati", "Ferrari", "McLaren", "Mercedes"]
//Question 3
coolCars[3] = "Lamborghini";
// console.log(coolCars);
//Question 4
coolCars.forEach(coolCars => {
    // console.log(coolCars);
    
});

//Question 5
console.log(coolCars.reverse());

//Question 6
let removedItem = coolCars.reverse().pop();
console.log(coolCars);
 
//Question 7
coolCars.unshift(removedItem);
console.log(coolCars);

//question 8
let a = 17;
let age = 18;

if ( a > age){
    console.log("You are older than 18");
    
}else{
    console.log("You are younger than 18");
}

//Question 9
let value = 23
switch (true){
    case value > 18:
        console.log("You older than 18");
        break;
    default:
        console.log("You are younger than 18");
        break;
}

//Question 10
i = 0;
while (i < coolCars.length){
    console.log(coolCars[i]);
    i++
}
