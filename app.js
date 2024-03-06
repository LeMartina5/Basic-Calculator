
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear');
const equalsButton = document.querySelector('#equals');

let expression = [];

// Display Numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        expression.push(button.value);
        display.innerText = (expression.join(''));
    })
})

//display operation signs
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!expression.length) {
            return
        } if (expression[expression.length - 1] === '+' || expression[expression.length - 1] === '-' || expression[expression.length - 1] === '*' || expression[expression.length - 1] === '/') {
            expression.pop();
            expression.push(button.value);
            display.innerText = (expression.join(''));
        } else {
            expression.push(button.value);
            display.innerText = (expression.join(''));
        }
    })
})

// delete single input display
deleteButton.addEventListener('click', () => {
    expression.splice(-1);
    display.innerText = (expression.join(''));
})


//clear all display
allClearButton.addEventListener('click', () => {
    expression.splice(0);
    display.innerText = (expression);
})

equalsButton.addEventListener('click', () => {
    if (!expression.length) {
        return
    } else {
        let stringResult = expression.join('');
        result = eval(stringResult);
        fixedResult = Number.isInteger(result) ? result : result.toFixed(10)
        display.innerText = fixedResult;
        expression.splice(0)
        expression.push(fixedResult);
    }
})