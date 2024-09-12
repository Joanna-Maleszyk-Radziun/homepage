document.cookie = 'ciastko = maniammaniam'
document.cookie = 'drugie = ok'
document.cookie = 'jagodowe = też dobre'
document.cookie = 'lubię = słodycze'

console.log('hello storage')

const myObject = {
    name: 'maciek',
    age: 35
}

localStorage.setItem('name', JSON.stringify(myObject))

const fromStorage = JSON.parse(localStorage.getItem('name'));
console.log(fromStorage)
