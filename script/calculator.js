//Calculator App
const display = document.getElementById('display');
let a = "";
let b = "";
let operator;

function updateDisplay(content) {
    display.innerHTML = content;
}

function addContent(element) {
    if(a[0] == 0 && element > 0) a += element;
    else if (element == '.' && a.includes('.') == true);
    else {
        a += element;
    }
       
    updateDisplay(a);
    
    // if ((element == '+' || element == '-' || element == '/' || element == '*') && operator == undefined) {
    //     b = a;
    //     a = 0;
    //     operator = element;
    // }
    // else if ((Number(a) == 0 && Number(element) > 0 && operator != undefined) || (Number(a) == 0 && Number(element) > 0 && operator == undefined)) a = element;
    // else if (Number(element) > 0 && Number(element) <= 9) a += element;
    // else if (element == '.' && a.includes('.') == false) a += element;

    
}

function equal() {

    a = eval(a)
    updateDisplay(a);


    // if (operator == '+') {
    //     updateDisplay(Number(b) + Number(a));
    //     a = 0;
    //     b = 0;
    //     operator = undefined;
    // }
    // else if (operator == '-') {
    //     updateDisplay(Number(b) - Number(a));
    //     a = 0;
    //     b = 0;
    //     operator = undefined;
    // }
    // else if (operator == '/') {
    //     updateDisplay(Number(b) / Number(a));
    //     a = 0;
    //     b = 0;
    //     operator = undefined;
    // }
    // else if (operator == '*') {
    //     updateDisplay(Number(b) * Number(a));
    //     a = 0;
    //     b = 0;
    //     operator = undefined;
    // }
    

}

function CE() {
    a = ''; 
    operator = undefined;
    updateDisplay(0);
}

function root() {
    a = Math.sqrt(a);
    updateDisplay(a);
}

function pow() {
    a = Math.pow(a, 2);
    updateDisplay(a)
}

function turn() {
    a = -a;
    updateDisplay(a);
}