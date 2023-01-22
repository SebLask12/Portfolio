//Calculator App
const display = document.getElementById('display');
let a = "";
let b = "";
let operator;
const displayContent = display.innerHTML;


function updateDisplay(content) {
    display.innerHTML = content;
}

function addContent(element) {
    if(a[0] == 0 && element > 0) a += element;
    // else if (element == '.' && display.innerHTML[(display.innerHTML).length-1] == '.');
    // else if (element == '.' && displayContent.includes('.') == true) {
    //     if (display.innerHTML[(display.innerHTML).length - 1] == '.');
    //     else {
    //         for (let i = displayContent.length - 1; i >= 0; i--)
    //         {
    //             if(i == )
    //             }
    //     }
    // }
        
    else {
        a += element;
    }
    //dot to modify
    updateDisplay(a);    
}

function equal() {

    a = eval(a)
    updateDisplay(a);

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