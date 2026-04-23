function multiplicar(fator, numeros) {
    return numeros.map(num => num * fator);
}

console.log(multiplicar(3, [1, 2, 2, 3, 5, 6]));