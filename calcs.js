let historyEl = document.getElementById("history");
let resultEl = document.getElementById("result");

let history = "";
let currentInput = "";

function append(value) {
  currentInput += value;
  resultEl.textContent = currentInput;
}

function clearDisplay() {
  currentInput = "";
  history = "";
  historyEl.textContent = "";
  resultEl.textContent = "0";
}

function calculate() {
  try {
    history = currentInput;
    let output = eval(currentInput.replace("^", "**")); // handle ^ as exponent
    historyEl.textContent = history;
    resultEl.textContent = output.toLocaleString();
    currentInput = output;
  } catch {
    resultEl.textContent = "Error";
  }
}
