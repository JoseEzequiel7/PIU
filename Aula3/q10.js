function somar(numeros) {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(somar([1, 2, 2, 3, 5, 6]));