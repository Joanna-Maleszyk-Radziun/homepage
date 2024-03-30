const firstName = 'Maciek Korsan';
const age = 35;

console.log(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')


header.style.color = 'red'

const contentJs = document.querySelector('.my-article__content--js')

contentJs.innerHTML = 'Jestem wypełniony JS🤯!'

const tekst = document.querySelector('.my-article__tekst--js')

tekst.innerHTML = 'ciąg dalszy ćwiczeń'

const gora = document.querySelector('.my-article__gora--js')

gora.innerHTML = 'jfndfvbfhvbr'

function calculate(myNumber) {
    myNumber = myNumber +3;
    console.log(myNumber);
    return myNumber*7;
}

calculate(1);

const result = calculate(2);
console.log(result);

function hello() {
    console.log('hello');
}

hello();