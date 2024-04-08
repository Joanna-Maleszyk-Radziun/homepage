const humanOne = {
    name: 'Maciek',
    age: 32
}

const humanTwo = {
    name: 'Stefan',
    age: humanOne.age
}


console.log(humanOne)
console.log(humanTwo)

humanOne.age = 35

console.log(humanOne)
console.log(humanTwo)