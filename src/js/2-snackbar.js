import { formEl } from "./refs.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";





formEl.addEventListener('submit', creatPromise)

function creatPromise(event) {
    event.preventDefault();
    const delayImput = Number(event.currentTarget.delay.value);
    const stateInput = event.currentTarget.state.value;
    

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateInput === "fulfilled") {
                resolve(delayImput);
        
            } else {
                reject(delayImput)
            }
        }, delayImput);
    });

    promise.then((delayImput) => {
        iziToast.show({
            message: `✅ Fulfilled promise in ${delayImput} ms`,
            color: 'aqua',
            position: 'topRight',
            messageColor: 'green',
            messageSize: '20',
            timeout: 3000,
        });
    }).catch((delayImput) => {
        iziToast.show({
            message: `❌ Rejected promise in ${delayImput} ms`,
            color: 'blue',
            position: 'topRight',
            messageColor: 'red',
            messageSize: '20',
            timeout: 3000,
        });
    });
};


    
