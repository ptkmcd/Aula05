function calcularMontante() {
    const capitalInput = document.getElementById("capital");
    const taxaJurosInput = document.getElementById("taxaJuros");
    const tempoMesesInput = document.getElementById("tempoMeses");
    const resultado = document.getElementById("resultado");

    const capital = parseFloat(capitalInput.value);
    const taxaJuros = parseFloat(taxaJurosInput.value);
    const tempoMeses = parseInt(tempoMesesInput.value);

    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(tempoMeses)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    const taxaDecimal = taxaJuros / 100;
    const montante = capital * Math.pow(1 + taxaDecimal, tempoMeses);

    resultado.textContent = `O montante após ${tempoMeses} meses será de R$ ${montante.toFixed(2)}`;
}
