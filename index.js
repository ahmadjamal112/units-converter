const categorySelect = document.getElementById('category');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const inputValue = document.getElementById('inputValue');
const resultDiv = document.getElementById('result');

function populateUnits() {
  const category = categorySelect.value;
  fromUnitSelect.innerHTML = '';
  toUnitSelect.innerHTML = '';

  if (category === 'weight') {
    fromUnitSelect.innerHTML = `
      <option value="kg">Kilogram (kg)</option>
      <option value="lb">Pound (lb)</option>
    `;
    toUnitSelect.innerHTML = fromUnitSelect.innerHTML;
  } else if (category === 'distance') {
    fromUnitSelect.innerHTML = `
      <option value="km">Kilometer (km)</option>
      <option value="miles">Miles (mi)</option>
    `;
    toUnitSelect.innerHTML = fromUnitSelect.innerHTML;
  } else if (category === 'temperature') {
    fromUnitSelect.innerHTML = `
      <option value="celsius">Celsius (°C)</option>
      <option value="fahrenheit">Fahrenheit (°F)</option>
    `;
    toUnitSelect.innerHTML = fromUnitSelect.innerHTML;
  }
}

function convert() {
  const category = categorySelect.value;
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  const value = parseFloat(inputValue.value);

  if (isNaN(value)) {
    resultDiv.innerHTML = "❗ Please enter a valid number.";
    return;
  }

  if (value < 0 && category !== 'temperature') {
    resultDiv.innerHTML = "❗ Negative values not allowed for Weight or Distance.";
    return;
  }

  let result;

  if (category === 'weight') {
    if (fromUnit === 'kg' && toUnit === 'lb') {
      result = value * 2.20462;
    } else if (fromUnit === 'lb' && toUnit === 'kg') {
      result = value / 2.20462;
    } else {
      result = value;
    }
  } else if (category === 'distance') {
    if (fromUnit === 'km' && toUnit === 'miles') {
      result = value * 0.621371;
    } else if (fromUnit === 'miles' && toUnit === 'km') {
      result = value / 0.621371;
    } else {
      result = value;
    }
  } else if (category === 'temperature') {
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      result = (value * 9/5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      result = (value - 32) * 5/9;
    } else {
      result = value;
    }
  } else {
    resultDiv.innerHTML = "❗ Please select a category.";
    return;
  }

  resultDiv.innerHTML = `✅ Converted Value: <strong>${result.toFixed(2)}</strong>`;
}

function resetFields() {
  categorySelect.value = '';
  fromUnitSelect.innerHTML = '';
  toUnitSelect.innerHTML = '';
  inputValue.value = '';
  resultDiv.innerHTML = 'Result will appear here...';
}
