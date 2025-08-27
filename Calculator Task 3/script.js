const display = document.getElementById("display");
let currentInput = "";
let memory = 0;

function appendValue(value) {
  if (value === "π") {
    currentInput += Math.PI;
  } else if (value === "^") {
    currentInput += "**"; // power operator
  } else if (display.innerText === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function toggleSign() {
  if (currentInput) {
    if (currentInput.charAt(0) === "-") {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    updateDisplay();
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    display.innerText = "Error";
  }
}

function applyFunction(func) {
  let num = parseFloat(currentInput);
  if (!isNaN(num)) {
    switch (func) {
      case "sqrt": currentInput = Math.sqrt(num).toString(); break;
      case "sin": currentInput = Math.sin(toRadians(num)).toString(); break;
      case "cos": currentInput = Math.cos(toRadians(num)).toString(); break;
      case "tan": currentInput = Math.tan(toRadians(num)).toString(); break;
      case "log": currentInput = Math.log10(num).toString(); break;
      case "exp": currentInput = Math.exp(num).toString(); break;
    }
    updateDisplay();
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function copyToClipboard() {
  navigator.clipboard.writeText(display.innerText);
  alert("Copied: " + display.innerText);
}

// Memory Functions
function memoryAdd() {
  memory += parseFloat(display.innerText) || 0;
  alert("Added to Memory: " + memory);
}

function memorySubtract() {
  memory -= parseFloat(display.innerText) || 0;
  alert("Subtracted from Memory: " + memory);
}

function memoryRecall() {
  currentInput = memory.toString();
  updateDisplay();
}

function memoryClear() {
  memory = 0;
  alert("Memory Cleared");
}
