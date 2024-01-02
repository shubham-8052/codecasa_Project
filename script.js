function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    let result;

    if (selectedUnit === 'celsius') {
        result = (temperatureInput * 9/5) + 32;
    } else {
        result = (temperatureInput - 32) * 5/9;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${selectedUnit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
}
