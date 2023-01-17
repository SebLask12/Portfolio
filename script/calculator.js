//Calculator App
const display = document.getElementById('display');
let a = "";
let b = "";
let operator;

function updateDisplay(content) {
    display.innerHTML = content;
}

function addContent(element) {
    if (element == '+' && operator == undefined) {
        b = a;
        a = 0;
        operator = element;
    }
    else if (element == '-' && operator == undefined) {
        b = a;
        a = 0;
        operator = element;
    }
    else if (element == '/' && operator == undefined) {
        b = a;
        a = 0;
        operator = element;
    }
    else if ((a == 0 && operator && element > 0 || element != undefined) || (a == 0 && operator && element > 0 || element == undefined)) a = element;
    else if (Number(element) > 0 && Number(element) <= 9) a += element;
       
    updateDisplay(a);
}

function equal() {
    if (operator == '+') {
        updateDisplay(Number(b) + Number(a));
        a = 0;
        b = 0;
        operator = undefined;
    }
    else if (operator == '-') {
        updateDisplay(Number(b) - Number(a));
        a = 0;
        b = 0;
        operator = undefined;
    }
    else if (operator == '/') {
        updateDisplay(Number(b) / Number(a));
        a = 0;
        b = 0;
        operator = undefined;
    }
}


