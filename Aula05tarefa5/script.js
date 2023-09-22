document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcularButton");
    const resultadoElement = document.getElementById("resultado");

    calcularButton.addEventListener("click", function () {
        const raio = parseFloat(document.getElementById("raio").value);

        if (!isNaN(raio) && raio >= 0) {
            const area = calcularAreaDoCirculo(raio);
            const perimetro = calcularPerimetroDoCirculo(raio);

            resultadoElement.innerHTML = `Área: ${area.toFixed(2)} unidades quadradas<br>Perímetro: ${perimetro.toFixed(2)} unidades`;
        } else {
            resultadoElement.innerHTML = "Por favor, insira um raio válido.";
        }
    });

    function calcularAreaDoCirculo(raio) {
        return Math.PI * Math.pow(raio, 2);
    }

    function calcularPerimetroDoCirculo(raio) {
        return 2 * Math.PI * raio;
    }
});
