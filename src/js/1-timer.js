
import { btnStart, newDays, newHours, newMinutes, newSeconds } from "./refs.js"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



btnStart.disabled = true;

let userSelectedDate;

btnStart.addEventListener("click", () => {
    
    btnStart.disabled = true;
    
    
   const clockInterval = setInterval(() => {
          
        const dataNow = Date.now();
        const ms = userSelectedDate - dataNow;
        const conver = convertMs(ms);
            
        const stopNewDays = newDays.textContent = addLeadingZero(conver.days);
        const stopNewHours = newHours.textContent = addLeadingZero(conver.hours);
        const stopNewMinutes = newMinutes.textContent = addLeadingZero(conver.minutes);
        const stopNewSeconds = newSeconds.textContent = addLeadingZero(conver.seconds);
       
        if (stopNewDays == 0 && stopNewHours == 0 && stopNewMinutes == 0 && stopNewSeconds == 0) {
            clearInterval(clockInterval);
        }
    }, 1000);
    
  }   
)

function addLeadingZero(value) {
    return `${value}`.toString().padStart(2, "0")
    
}

function nowBtnDisabled() {
    if (userSelectedDate > options.defaultDate) {
      btnStart.disabled = false;
    } else {
        iziToast.warning({
            title: 'Error',
            message: 'Please choose a date in the future',
            color: 'yellow',
            position: 'topCenter',
            titleColor: 'red',
            messageColor: 'green',
            messageSize: '20',
            timeout: 3000,
});
 }
} 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const userDate = selectedDates[0];
      userSelectedDate = userDate;
      nowBtnDisabled();
  },
};



flatpickr("#datetime-picker", options
);

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
