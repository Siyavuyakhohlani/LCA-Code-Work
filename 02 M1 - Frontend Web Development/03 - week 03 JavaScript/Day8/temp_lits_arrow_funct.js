// TODO: Create a multiline string using template literals

const multiline = `The first line is for your name. 
The second line is for surname.`
console.log(multiline);

// TODO: Create a function that uses template literals for HTML generation

function generateHtml(title, subtitle, items){
    const htmlcontent =`
    <div class="container">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    </div>
    `;
    return htmlcontent;
}
let ti = "welcome to my website"
let subTi = "This is place to witness the beauty of our planet"
let nav = ["Home", "About", "Contact"]

console.log(generateHtml(ti, subTi, nav));

// TODO: Convert regular functions to arrow functions
const generateHtml1 = (title, subtitle, items) =>{
    const htmlcontent =`
    <div class="container">
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <ul>
            ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
    </div>
    `;
    return htmlcontent;
}

let tit = "welcome to my website"
let subTit = "This is place to witness the beauty of our planet"
let navb = ["Home", "About", "Contact"]

console.log(generateHtml1(tit, subTit, navb));

// TODO: Use arrow functions with array methods

const arrayList = numbers => {
    return Math.max(...numbers);
}

let myArray = [1, 2, 3, 4, 6];
console.log(arrayList(myArray));
