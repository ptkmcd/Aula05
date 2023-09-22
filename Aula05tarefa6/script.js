document.addEventListener("DOMContentLoaded", function () {
    const inverterButton = document.getElementById("inverterButton");
    const resultadoElement = document.getElementById("resultado");

    inverterButton.addEventListener("click", function () {
        const numero = parseInt(document.getElementById("numero").value);

        if (!isNaN(numero)) {
            const numeroInvertido = inverterNumero(numero);
            resultadoElement.textContent = `Número Invertido: ${numeroInvertido}`;
        } else {
            resultadoElement.textContent = "Por favor, insira um número válido.";
        }
    });

    function inverterNumero(numero) {
        const numeroString = numero.toString();
        const numeroInvertidoString = numeroString.split('').reverse().join('');
        return parseInt(numeroInvertidoString);
    }
});
