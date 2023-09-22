document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");

    calcularButton.addEventListener("click", function () {
        const numero = parseFloat(prompt("Digite um número:"));

        if (!isNaN(numero)) {
            const cubo = calcularCubo(numero);
            alert(`O cubo de ${numero} é ${cubo}`);
        } else {
            alert("Por favor, insira um número válido.");
        }
    });

    function calcularCubo(numero) {
        return Math.pow(numero, 3);
    }
});
