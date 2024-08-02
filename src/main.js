const firstName = 'Maciek Korsan';
const age = 35;

console.log(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')


const contentJs = document.querySelector('.my-article__content--js')

contentJs.innerHTML = 'Jestem wypełniony JS🤯!'

const tekst = document.querySelector('.my-article__tekst--js')

tekst.innerHTML = 'ciąg dalszy ćwiczeń'

const gora = document.querySelector('.my-article__gora--js')

gora.innerHTML = 'jfndfvbfhvbr'

const calculate = myNumber => (myNumber + 4) * 7;

calculate(2);

const result = calculate(2);
console.log(result);

function hello() {
    console.log('hello');
}
hello();




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

console.log(deathStar.commander.name)
console.log(deathStar['levels'])
deathStar.fire('alderaan')



const greet = (name, age) => {
    const result = `Witaj ${name}! Masz ${age} lat.`;
    return result;
}

const greeting = greet('Maciek', 35);
console.log(greeting);
console.log(greet('Asia', 85));


const button = document.querySelector('.page-header__button--js')

button.addEventListener('click', (e) =>{
    const header = document.querySelector('.page-header__heading--js')
    header.innerHTML = 'klik, klik!';
})
