function filtrar(divisor, numeros) {
    return numeros.filter(num => num % divisor === 0);
}

console.log(filtrar(3, [1, 2, 2, 3, 5, 6]));