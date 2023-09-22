function ordenarArray(array) {
    if (array.length !== 2) {
        return "O array deve conter exatamente 2 números.";
    }

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

// Função para manipular o clique no botão
function ordenarArrayClicado() {
    const numeros = [7, 3];
    const arrayOriginalSpan = document.getElementById("arrayOriginal");
    const arrayOrdenadoSpan = document.getElementById("arrayOrdenado");

    arrayOriginalSpan.textContent = numeros.join(", ");
    const arrayOrdenado = ordenarArray(numeros);
    arrayOrdenadoSpan.textContent = arrayOrdenado.join(", ");
}

// Adicionar um ouvinte de eventos ao botão
const ordenarButton = document.getElementById("ordenarButton");
ordenarButton.addEventListener("click", ordenarArrayClicado);
