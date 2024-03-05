const firstName = 'Maciek Korsan';
const age = 35;

console.log(`Nazywam się ${firstName} i mam ${age} lat`)

const header = document.querySelector('.page-header__heading--js')

console.log(header.innerHTML)

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat`

console.log(header.style)

header.style.color = 'red'

const contentJs = document.querySelector('.my-article__content--js')

contentJs.innerHTML = 'Jestem wypełniony JS🤯!'

const tekst = document.querySelector('.my-article__tekst--js')

tekst.innerHTML = 'ciąg dalszy ćwiczeń'

const gora = document.querySelector('.my-article__gora--js')

gora.innerHTML = 'ćwiczę sobie querySelector'