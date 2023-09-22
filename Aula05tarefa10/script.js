document.addEventListener("DOMContentLoaded", function () {
    const contarBtn = document.getElementById("contarBtn");
    const resultado = document.getElementById("resultado");

    contarBtn.addEventListener("click", function () {
        const textoInput = document.getElementById("texto").value.toLowerCase(); // Converte para minúsculas

        const vogais = "aeiou";
        let contador = 0;

        for (let i = 0; i < textoInput.length; i++) {
            if (vogais.includes(textoInput[i])) {
                contador++;
            }
        }

        resultado.textContent = `Número de vogais: ${contador}`;
    });
});
