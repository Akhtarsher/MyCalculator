function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue); // Note: Using eval for simplicity, consider safer alternatives in a production environment
    document.getElementById('display').value = result;
  }