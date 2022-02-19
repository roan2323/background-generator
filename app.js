const h3 = document.querySelector('h3');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const body = document.querySelector('body');

const setGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

const changeValues = () => {
  body.style.background = setGradient();
  h3.textContent = body.style.background;
};

color1.addEventListener('input', () => {
  changeValues();
});

color2.addEventListener('input', () => {
  changeValues();
});
