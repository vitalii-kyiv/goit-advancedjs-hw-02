const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const animationSpeed = 1000;
let startId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, animationSpeed);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtnClick() {
  stopBtn.disabled = true;
  startBtn.disabled = false;

  clearTimeout(startId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
