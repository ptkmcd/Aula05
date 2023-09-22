document.addEventListener("DOMContentLoaded", function () {
    const contarButton = document.getElementById("contarButton");
    const resultadoElement = document.getElementById("resultado");

    contarButton.addEventListener("click", function () {
        const texto = document.getElementById("texto").value;
        const caractere = document.getElementById("caractere").value;

        if (texto.trim() === "" || caractere.length !== 1) {
            resultadoElement.textContent = "Por favor, insira uma string e um único caractere.";
            return;
        }

        const ocorrencias = contarCaractere(texto, caractere);
        resultadoElement.textContent = `O caractere "${caractere}" aparece ${ocorrencias} vezes na string.`;
    });

    function contarCaractere(texto, caractere) {
        let ocorrencias = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto.charAt(i) === caractere) {
                ocorrencias++;
            }
        }
        return ocorrencias;
    }
});
