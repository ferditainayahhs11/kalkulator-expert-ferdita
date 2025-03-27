// Menambahkan angka atau operator ke layar
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Menambahkan fungsi expert
function appendFunction(func) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    if (func === "sqrt") {
        display.value = `√(${currentValue})`;
    } else if (func === "fact") {
        display.value = `fact(${currentValue})`;
    } else {
        display.value = `${func}(${currentValue})`;
    }
}

// Menghapus layar kalkulator
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Fungsi faktorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Menghitung hasil ekspresi yang dimasukkan
function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;

    try {
        expression = expression.replace(/sin\(([^)]+)\)/g, (_, angle) => Math.sin(angle * Math.PI / 180));
        expression = expression.replace(/cos\(([^)]+)\)/g, (_, angle) => Math.cos(angle * Math.PI / 180));
        expression = expression.replace(/tan\(([^)]+)\)/g, (_, angle) => Math.tan(angle * Math.PI / 180));
        expression = expression.replace(/log\(([^)]+)\)/g, (_, num) => Math.log10(num));
        expression = expression.replace(/sqrt\(([^)]+)\)/g, (_, num) => Math.sqrt(num));
        expression = expression.replace(/exp\(([^)]+)\)/g, (_, num) => Math.exp(num));
        expression = expression.replace(/fact\(([^)]+)\)/g, (_, num) => factorial(Number(num)));

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error!";
    }
}
