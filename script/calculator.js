//Calculator App
const display = document.getElementById('display');
let equation = [];
let equPos = 0;
let operator = ['+','-','*','/'];

function updateDisplay(content) {
    display.innerHTML = content;        
}

function addContent(element) {
    const checkInclude = (data, search) => data.includes(search);
    const checkEquation = (search) => equation[equPos].split('').slice(1).some((e) => search.includes(e));
    if (element >=0 && element <=9) {
        if (display.innerHTML[1] == '.' && display.innerHTML.length == 2) equation[equPos] += element;
        else if (Number(display.innerHTML[0]) == 0 && element > 0) equation[equPos] = element;
        else if(equation[equPos] == undefined) equation[equPos] = element;
        else equation[equPos] += element;
    } 
    else if (element == '.') {
        if (equation[equPos] == undefined) {
            equation[equPos] = 0 + element;
        }
        else if (checkInclude(equation[equPos], '.') == true);
        else {
            equation[equPos] += element;
        }
        
    }
    else if (checkInclude(operator,element) == true && checkEquation(operator) == false) {
        equation[equPos] += element;
        equPos++;
    }
    
    updateDisplay(equation.join(''));
        
}


function equal() {

    let a = eval(display.innerHTML.toString())
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a);
}

function CE() {
    equation.length = 0;
    equPos = 0;
    updateDisplay(0);
}

function root() {
    let a = Math.sqrt(display.innerHTML.toString());
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a);
}

function pow() {
    let a = Math.pow(display.innerHTML.toString(), 2);
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a)
}

function turn() {
    let a = eval(display.innerHTML.toString())
    equation.length = 0;
    equation[0] = String(-a);
    equPos = 0;
    updateDisplay(-a);
}