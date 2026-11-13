let display = document.getElementById("display");

function calculate(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);

        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}