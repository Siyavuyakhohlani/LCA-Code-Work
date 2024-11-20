// TODO: Create a global variable called globalCount
var globalCount = 0;
console.log("The global is equal to "+ globalCount);
// TODO: Create a function that demonstrates local scope
function demoLocalScope(){
    let varLocal = 0;
    console.log("The local scope is equal to " + varLocal);
    
}

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    globalCount++;
    console.log("Global count after increment: " + globalCount);
  
    let varLocal = 5;
    varLocal++;
    console.log("Local count after increment: " + varLocal);
  }
  modifyVariables();
  

// TODO: Create a Student constructor function

function Student(first, last, age, course){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.course = course
}

// TODO: Create several student instances
const Student1 = new Student("Sia", "Khohlani", 25, "Python")
const Student2 = new Student("Zenande", "Mfenyane", 19, "Nursing")

// TODO: Create an object literal with nested properties

const school = {
    name: "New Eisleben",
    location: "Cape Town",
    students: [
      {
        name: "Brian",
        age: 20,
        grade: "A"
      },
      {
        name: "Liya",
        age: 22,
        grade: "B"
      },
      
    ],
    principal: {
      name: "Mr Bhushula",
      experience: 4
    }
  };
  
  console.log(school);
  