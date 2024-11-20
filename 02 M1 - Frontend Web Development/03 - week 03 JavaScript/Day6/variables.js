

function times(a,b){
    if(typeof a != "number" || typeof b != "number"){throw new Error("hol' up a or b is not a numbers")
    }
    return a*b
}

try{
    console.log(times(1,8));
    console.log("Hi there times");
    
}catch(e){
    console.error(e);
    console.log("This is after the error");
}finally{
    console.log("Yay! I have run and I'm out of breath");
    
}