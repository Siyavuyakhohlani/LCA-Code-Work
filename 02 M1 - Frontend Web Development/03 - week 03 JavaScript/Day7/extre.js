function demonstrateErrors() {
    // 1. SyntaxError (commented out to avoid actual error)
    // let x = 
  
    // 2. TypeError
    let num = "five";
    try {
      console.log(num * 2);
    } catch (error) {
      console.log("TypeError:", error.message);
    }
  
    // 3. ReferenceError
    try {
      console.log(undefinedVar);
    } catch (error) {
      console.log("ReferenceError:", error.message);
    }
  
    // 4. RangeError
    let arr = [1, 2, 3];
    try {
      arr.length = -1;
    } catch (error) {
      console.log("RangeError:", error.message);
    }
}  

function toTitleCase(str){
    return str.toTitleCase();
}

console.log(toTitleCase("Siya"));
