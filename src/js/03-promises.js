import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const { delay, step, amount, submitButton } = form.elements;

form.addEventListener('submit', onSubmitBtnClick);

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

function onSubmitBtnClick(evt) {
  evt.preventDefault();
  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountPromise = Number(amount.value);
  for (let i = 1; i <= amountPromise; i++) {
    const currentDelay = firstDelay + (i - 1) * delayStep;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        iziToast.success({
          closeOnEscape: true,
          closeOnClick: true,
          backgroundColor: 'green',
          messageColor: 'white',
          position: 'topRight',
          messageSize: '24',
          message: `✅ Fulfilled promise ${position} in ${delay}ms`,
        });
      })
      .catch(({ position, delay }) => {
        iziToast.error({
          closeOnEscape: true,
          closeOnClick: true,
          backgroundColor: 'tomato',
          messageColor: 'white',
          position: 'topRight',
          messageSize: '24',
          message: `❌ Rejected promise ${position} in ${delay}ms`,
        });
      });
  }
  form.reset();
}
