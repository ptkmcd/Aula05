function calcularFatorial() {
    const numeroInput = document.getElementById("numero");
    const resultado = document.getElementById("resultado");

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 0) {
        resultado.textContent = "Por favor, insira um número inteiro não negativo.";
        return;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.textContent = `O fatorial de ${numero} é ${fatorial.toLocaleString()}`;
}
