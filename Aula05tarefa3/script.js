document.addEventListener("DOMContentLoaded", function () {
    const converterButton = document.getElementById("converterButton");
    const resultadoElement = document.getElementById("resultado");

    converterButton.addEventListener("click", function () {
        const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

        if (!isNaN(fahrenheit)) {
            const celsius = converterFahrenheitParaCelsius(fahrenheit);
            resultadoElement.innerHTML = `A temperatura em Celsius é: ${celsius.toFixed(2)} °C`;
        } else {
            resultadoElement.innerHTML = "Por favor, insira uma temperatura válida em Fahrenheit.";
        }
    });

    function converterFahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
});
