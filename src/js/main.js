import * as nowaNazwa from "./calculate";
import { differenceInDays } from "date-fns";
import substract from "./substract";

const firstName = 'Maciek Korsan';
const age = 35;

const calculate = () => 'Hej hej obliczam';

console.log(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')



const contentJs = document.querySelector('.my-article__content--js')

contentJs.innerHTML = 'Jestem wypełniony JS🤯!'

const tekst = document.querySelector('.my-article__tekst--js')

tekst.innerHTML = 'ciąg dalszy ćwiczeń'

const gora = document.querySelector('.my-article__gora--js')

gora.innerHTML = 'jfndfvbfhvbr'



calculate(2);

const result = nowaNazwa.calculate(2);
 

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

 
deathStar.fire('alderaan')
deathStar.fire('scarif')



const greet = (name, age) => {
    const result = `Witaj ${name}! Masz ${age} lat.`;
    return result;
}

const greeting = greet('Maciek', 35);




const button = document.querySelector('.page-header__button--js')

button.addEventListener('click', (e) =>{
    document.documentElement.style.setProperty('--backgroundColor', 'tomato')
})


const resultDays = differenceInDays(
    new Date(2025, 2, 6, 13, 0),
    new Date()
  )

  console.log(resultDays)


  console.log(`Różnica między 10, a 5 to: ${substract (10, 5)}`)