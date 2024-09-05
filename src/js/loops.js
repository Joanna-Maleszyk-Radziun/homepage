const elements = ['😎', '😯', '🤦‍♂️', '❤']

for (let i = 0; i < elements.length; i++){
    console.log(`Index: ${i} Emoji: ${elements[i]}`)
}

for (let element of elements) {
    console.log(element)
}

let n = 9;

do {
    console.log(n)
    n = n +3;
} while (n < 9)

console.log(n)

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'Darth Vader'
    }
}

for (property in deathStar) {
    console.log(`${property}: `)
    console.log(deathStar[property])
}