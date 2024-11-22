// function waiting (callback){
//     console.log('You are waiting for your meal 1');
//     setTimeout(()=>{
//         console.log('Your food is ready');
//         callback()
//     },4000)
// }
// function ready(){
//     console.log('Your food has been served');
// }ls
// waiting(ready)
// console.log('You are waiting for your meal 2');
// console.log('You are waiting for your meal 3');


// let workout = true
// let p = new Promise((resolve,reject)=>{
// if (workout){
//     resolve("Man's looking like johny Bravo")
// }else{
//     reject("Hebanna eish man")
// }
// })
// p.then((message)=> message.split("")
// )

// p.then(function (message){
//     return message.split("")
// }).then(arr=> console.log(arr)
// )
// .catch(e=>{})


// async function waiting(){
//     let p =await new Promise((resolve,reject)=> {

//     })
// }


// fetch("https://matthew-dean-brown.github.io/api-data/data.json")
// .then(api => api.json())
// .then(data => {
//     console.log(data);
    
// })
// .catch(err=> console.error(err))

// async function fetchData(){
//     let api = await fetch("https://matthew-dean-brown.github.io/api-data/data.json")
//     if(api.ok != true) throw new Error("Problems azipheli njayam")

//     console.log(api);
// }

const fetchData = async ()=> {
    let api = await fetch("https://matthew-dean-brown.github.io/api-data/data.json")
    let data = await api.json()
    console.log(data);
}

fetchData()