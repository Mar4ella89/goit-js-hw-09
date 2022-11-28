import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  outputeValue: document.querySelector('.timer'),
  outputeDays: document.querySelector('span[data-days]'),
  outputeHours: document.querySelector('span[data-hours]'),
  outputeMinutes: document.querySelector('span[data-minutes]'),
  outputeSeconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Error');
      return;
    }
    refs.btnStart.removeAttribute('disabled');
  },
};

refs.btnStart.setAttribute('disabled', true);

const selectTime = flatpickr('#datetime-picker', options);

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const updateClockFace = ({ days, hours, minutes, seconds }) => {
  refs.outputeDays.textContent = `${days}`;
  refs.outputeHours.textContent = `${hours}`;
  refs.outputeMinutes.textContent = `${minutes}`;
  refs.outputeSeconds.textContent = `${seconds}`;
};

const timer = {
  start() {
    const timerId = setInterval(() => {
      refs.btnStart.setAttribute('disabled', true);

      const currentTime = Date.now();
      console.log(currentTime);

      const startTime = selectTime.latestSelectedDateObj.getTime();
      console.log(startTime);

      if (startTime < currentTime) {
        return;
      }

      const deltaTime = startTime - currentTime;
      const timeComponents = convertMs(deltaTime);
      console.log(timeComponents);
      updateClockFace(timeComponents);
    }, 1000);
  },
};

const onBtnClickStartTimer = () => {
  timer.start();
  clearInterval(timerId);
};

refs.btnStart.addEventListener('click', onBtnClickStartTimer);

Notiflix.Notify.success('Click Me', {
  timeout: 6000,
});
