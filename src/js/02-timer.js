import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('button[data-start]');
const getTimeDate = document.querySelector('#datetime-picker');

let selectedDate = 0;
let currentDate = 0;
let timeDifference = 0;

const elements = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

startBtn.disabled = true;

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    currentDate = new Date().getTime();
    timeDifference = selectedDate - currentDate;
    if (selectedDate > currentDate) {
      startBtn.disabled = false;
    } else {
      iziToast.warning({
        closeOnEscape: true,
        closeOnClick: true,
        backgroundColor: 'tomato',
        messageColor: 'white',
        position: 'topRight',
        messageSize: '24',
        message: 'Please choose a date in the future',
      });
    }
  },
};

flatpickr(getTimeDate, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', onStartBtnClick);

let second = 1000;

function onStartBtnClick() {
  startBtn.disabled = true;
  getTimeDate.disabled = true;
  const timerInterval = setInterval(function () {
    const timeObj = convertMs(timeDifference);
    const days = addLeadingZero(timeObj.days);
    const hours = addLeadingZero(timeObj.hours);
    const minutes = addLeadingZero(timeObj.minutes);
    const seconds = addLeadingZero(timeObj.seconds);
    elements.days.textContent = days;
    elements.hours.textContent = hours;
    elements.minutes.textContent = minutes;
    elements.seconds.textContent = seconds;

    if (timeDifference <= 1000) {
      clearInterval(timerInterval);
      getTimeDate.disabled = false;
    }
    timeDifference -= second;
  }, second);
}
