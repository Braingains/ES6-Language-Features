const names = ["Ewan", "Shufan", "Ross", "Callum", "Kimra"];

//Array Destructuring. 
const [ewan, shufan, ...remainingNames] = names; //this defines ewan and shufan as constants,
                                                 //and copies the rest into a new array remainingNames

console.log(remainingNames)
console.log(names)
console.log(ewan)

const person = {
    name: "Bobbo",
    age: 31
  }
//   const name = person.name;
//   const age = person["age"];

//this does the same as above via object destructuring.
const { name, age } = person;
  
  console.log(name);
  console.log(age);