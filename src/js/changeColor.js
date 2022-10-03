import colors from './colors';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const background = document.querySelector('body');
let intervalId = null;

const changeBg = () => {
  background.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
};

buttonStart.addEventListener('click', () => {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  intervalId = setInterval(changeBg, 1000);
});
buttonStop.addEventListener('click', () => {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(intervalId);
});
