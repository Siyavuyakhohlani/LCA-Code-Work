// function product(a, b){
//     return a * b;
// }
// const result = product(2, 4);
// console.log(result);
// // for loop
// const count = 10

// for (i= 0; i < count; i++){
//     console.log(i);    
// }

//while loop
// let S = 2

// while(S <= 8){
//     console.log("Matthew");
//     S++    
// }
// // do-while
// do{
//     console.log("Matthew");
//     S++
// }while(S <= 8)


let names = ["Nande", "Proff", "Usisipho"]

for (i= 0; i < names.length; i++){
    console.log(names[i]);    
}

//for-of loop

for( let name of names){
    console.log(name);
}

//for-in loop

for( let index in names){
    console.log(names[index]);
}