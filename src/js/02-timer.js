import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

   const startBtn = document.querySelector('button');
   const userData = document.querySelector('#datetime-picker');
   const clockface = document.querySelector('.js-clockface');
   const daysEl = document.querySelector('.value[data-days]');
   const hoursEl = document.querySelector('.value[data-hours]');
   const minutesEl = document.querySelector('.value[data-minutes]');
   const secondsEl = document.querySelector('.value[data-seconds]');




let userSelectedDate = null;




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      if(selectedDates[0] <= options.defaultDate) {
        window.alert("Please choose a date in the future");
      } else startBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    },
  };
flatpickr(userData,options);

const timer = {
    start() {
        let timerId = null;

        startBtn.disabled = true;
       timerId = setInterval((milliseconds) => {
            const currentTime = Date.now();
            const ms = userSelectedDate - currentTime;
            const { days, hours, minutes, seconds } = convertMs(ms);
            console.log(`${days}:${hours}:${minutes}:${seconds}`);  

            if(ms <= 0) {
                clearInterval(timerId);
                return
            };

        }, 1000);
    },
};

startBtn.addEventListener('click', () => {
    timer.start();
})

function updateClockface({ days, hours, minutes, seconds }) {
    clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}


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
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  function printTime(t) {
    daysEl.textContent = addLeadingZero(t.days);
    hoursEl.textContent = addLeadingZero(t.hours);
    minutesEl.textContent = addLeadingZero(t.minutes);
    secondsEl.textContent = addLeadingZero(t.seconds);
  }
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}