function isPrime(number) {
    if (number <= 1) {
        return false; // 0 e 1 não são primos
    }
    if (number <= 3) {
        return true; // 2 e 3 são primos
    }
    
    // Verifica divisibilidade por números inteiros de 2 a sqrt(number)
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Encontrou um divisor, não é primo
        }
    }
    
    return true; // Não encontrou divisores, é primo
}

const userInput = prompt("Digite um número para verificar se é primo:");
const number = parseInt(userInput);

if (isPrime(number)) {
    alert(`${number} é um número primo.`);
} else {
    alert(`${number} não é um número primo.`);
}
