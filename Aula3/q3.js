function dobrar(numeros) {
    return numeros.map(function(num) {
        return num * 2;
    });
}

console.log(dobrar([1, 2, 2, 3, 5, 6]));