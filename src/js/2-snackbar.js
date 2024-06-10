import { formEl } from "./refs.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const delayImput = event.currentTarget.delay.value;
    const stateInput = event.currentTarget.state.value;
 
    if (stateInput === 'fulfilled') {
        iziToast.show({
            message: `✅ Fulfilled promise in ${delayImput} ms`,
            color: 'aqua',
            position: 'topRight',
            messageColor: 'green',
            messageSize: '20',
            timeout: 3000,
});
    } else {
        iziToast.show({
            message: `❌ Rejected promise in ${delayImput} ms`,
            color: 'blue',
            position: 'topRight',
            messageColor: 'red',
            messageSize: '20',
            timeout: 3000,
});
    }
})
