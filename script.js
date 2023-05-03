const watchDocument = document.querySelector("#watch");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function init() {
    watch();
    interval = setInterval(watch, 1000);
}

const pause = () => {       // PAUSAR O TEMPO
    clearInterval(interval) // Usando ClearInterval
}

const clearAll = () => {
    clearInterval(interval);
    seconds = 0;                            // Voltar o relogio ao zero
    minutes = 0;
    watchDocument.innerHTML = "00:00:00";
}

const digitZero = (digit) => {
    if (digit < 10) {
        return `0${digit}`;     // Usado para adicionar os números a 2 digitos ex: 00 ; 02
    }   else {
        return digit
    }
}

function watch() { // Utilizando a função para definir parametros de cronometro 
    seconds++;

    if(seconds === 60) { // Se a váriavel segundos for igual a 60
        minutes++;       // os minutos incrementam, ou seja ADICIONA
        seconds = 0;     // e o segudos zeram novamente
    }

    if(minutes === 60) { // Se a variavel minuitos for igual a 60
        minutes = 0;     // os minutos zeram 
        hours++;         // e incrementa as horas
    }

    watchDocument.innerHTML = 
        digitZero(hours) + ":" + digitZero(minutes) + ":" + digitZero(seconds);
}