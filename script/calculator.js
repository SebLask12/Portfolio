//Calculator App
const display = document.getElementById('display');
let equation = [];
let equPos = 0;
let operator = ['+','-','*','/'];
let keys = ['1','2','3','4','5','6','7','8','9','/','*','-','+','.'];

document.addEventListener('keydown', function (e) {
    const checkKeys = (key) => keys.includes(key);
    if (checkKeys(e.key)) {
      addContent(`${e.key}`);
    }
    else if (e.key === 'Enter') {
        equal();
    }
  });

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
        else if (checkInclude(equation[equPos], '.'));
        else {
            equation[equPos] += element;
        }
        
    }
    else if (checkInclude(operator,element) && !checkEquation(operator)) {
        equation[equPos] += element;
        equPos++;
    }
    
    updateDisplay(equation.join(''));
        
}


const equal = () => {
    let a = eval(display.innerHTML.toString())
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a);
}

const CE = () => {
    equation.length = 0;
    equPos = 0;
    updateDisplay(0);
}

const root = () => {
    let a = Math.sqrt(display.innerHTML.toString());
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a);
}

const pow = () => {
    let a = Math.pow(display.innerHTML.toString(), 2);
    equation.length = 0;
    equation[0] = String(a);
    equPos = 0;
    updateDisplay(a)
}

const turn = () => {
    let a = eval(display.innerHTML.toString())
    equation.length = 0;
    equation[0] = String(-a);
    equPos = 0;
    updateDisplay(-a);
}