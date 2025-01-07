//! ============================================================
/* import carList from './data/car.js';

function carTemplate({ name, img, price, description }) {
  const item = document.createElement('li');
  const title = document.createElement('h2');
  title.textContent = name;
  const picture = document.createElement('img');
  picture.src = img;
  picture.alt = name;
  picture.width = 360;
  picture.height = 300;
  const dscr = document.createElement('p');
  dscr.textContent = description;
  const priceEl = document.createElement('p');
  priceEl.textContent = price;

  item.append(picture, title, priceEl, dscr);

  return item;
}

const elements = carList.map(carTemplate);
const markup = document.querySelector('.js-goods');
markup.append(...elements);
 */

//! ============================================================
const price = document.querySelector('#price');
const form = document.querySelector('.form');
const quant = document.querySelector('#quantity');
const amount = document.querySelector('.amount');
const final = document.querySelector('.text-right');
function calc(e) {
  e.preventDefault();
  const currentPrice = price.value;
  const currentQuantity = quant.value;
  const sum = currentQuantity * currentPrice;
  console.log(sum);
  amount.textContent = currentQuantity;
  final.textContent = sum;
}

form.addEventListener('submit', calc);

function amountText() {
  const currentQuantity = quant.value;
  amount.textContent = currentQuantity;
}

form.addEventListener('input', amountText);

const div = document.querySelector('.container');

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};
div.style.backgroundColor = randomRgbColor();
