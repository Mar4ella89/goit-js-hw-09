// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

const ref = {
  btnStart: document.querySelector("button[data-start]"),
  outputeValue: document.querySelector('.timer')
};

console.log(ref.btnStart);

const onBtnClickStartTimer = () => {};

ref.btnStart.addEventListener("click", onBtnClickStartTimer);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); 
  console.log(convertMs(140000));
  console.log(convertMs(24140000));
