console.log('destrukturyzacja + spread operator');

const person = {
    name: 'Maciek',
    age: 36,
    isAlive: true
}

const {name, age} = person;

console.log(name)
console.log(age)

const childrens = ['olga', 'tomek', 'marysia', 'stasio'];
const animals = ['fafik', 'papek', 'olga', 'misiek'];

const [firstChild, secondChild, thirdChild] = childrens;

console.log(firstChild)
console.log(thirdChild)
console.log(secondChild)

const address = {
    city: "gdańsk",
    country: "poland"
}


const childrensandpets = [...childrens, 'pizza', 'coconut', ...animals]

console.log(childrensandpets)