let person = {
    name: 'siya',
    surname: 'Khohlani',
    hairType: 'bald',
    fullname: function(){
        return this.name + this.surname;
        
    }
}
let {name} = person
console.log(name);

console.log(person['name']);


person.favColur = "black"
console.log(person.fullname());

/*function CreatePerson(name,surname, hairType){
    this.name = name,
    this.surname = surname,
    this.hairType = hairType
}

let person1 = new CreatePerson('Siya', 'Khohlani', 'bald')
let person2 = new CreatePerson('lizo', 'njeke', 'dreads')

let people = [person1,person2]
console.log(people);

for (const object of people) {
    if (object.hairType == 'dreads'){ 
    console.log(object.name);
    }
}
//updating the hairtype of all people to be bald
for (const object of people) {
    if (object.hairType == 'dreads'){ 
    object.hairType = 'bald'
    }
}
// CreatePerson.prototype.fullname = function(){
//     console.log('Hi ' + this.name);
    
// }
// let input = prompt('What is your name?')
// console.log(input);*/
