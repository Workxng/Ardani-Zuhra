const result = document.getElementById('result');

function appendToDisplay(value) {
    result.value += value;
}

function deleteLastChar() {
    result.value = result.value.slice(0, -1);
}

function clearDisplay() {
    result.value = '';
}

function calculate(operator) {
    const expression = result.value;
    if (operator === '=') {
        try {
            result.value = eval(expression);
        } catch (error) {
            result.value = 'Error';
        }
    } else {
        result.value += operator;
    }
}