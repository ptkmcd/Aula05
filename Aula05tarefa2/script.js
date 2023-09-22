document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const resultadoElement = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (!isNaN(base) && !isNaN(altura)) {
            const area = calcularAreaTriangulo(base, altura);
            resultadoElement.innerHTML = `A área do triângulo é: ${area.toFixed(2)}`;
        } else {
            resultadoElement.innerHTML = "Por favor, insira valores válidos para base e altura.";
        }
    });

    function calcularAreaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
});
