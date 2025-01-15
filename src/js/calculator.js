document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
    const clearBtn = document.getElementById('clear');
    const equalsBtn = document.getElementById('equals');

    let currentExpression = '';

    buttons.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn')) {
            const value = e.target.getAttribute('data-value');
            if (value !== '=') {
                appendToDisplay(value);
            }
        }
    });

    clearBtn.addEventListener('click', clearDisplay);
    equalsBtn.addEventListener('click', calculateResult);

    function appendToDisplay(value) {
        currentExpression += value;
        display.value = currentExpression;
    }

    function clearDisplay() {
        currentExpression = '';
        display.value = '';
    }

    function calculateResult() {
        try {
            // Basic input validation
            if (/^[0-9+\-*/().]+$/.test(currentExpression)) {
                const result = eval(currentExpression);
                display.value = result;
                currentExpression = result.toString();
            } else {
                throw new Error('Invalid input');
            }
        } catch (error) {
            display.value = 'Error';
            currentExpression = '';
        }
    }
});

