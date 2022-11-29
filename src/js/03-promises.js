import Notiflix from 'notiflix';

const refs = {
  inputeForm: document.querySelector('.form'),
  createPromisesBtn: document.querySelector('.form button'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          { position, delay }
        );
      } else {
        reject(
          { position, delay }
        );
      }
    }, delay);
  });
}

const onSubmitCreatePromise = event => {
  event.preventDefault();
   const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  
  const sumDelay = Number(delay.value) + Number(step.value)

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, sumDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            clickToClose: true,
            timeout: 3000,
          }
        )
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            clickToClose: true,
            timeout: 3000,
          }
        )
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};

refs.inputeForm.addEventListener('submit', onSubmitCreatePromise);
