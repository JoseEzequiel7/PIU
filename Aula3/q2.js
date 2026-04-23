function parOuImpar(numeros) {
    numeros.forEach((numero) => {
        if (numero % 2 === 0) {
            console.log(numero + " é par");
        } else {
            console.log(numero + " é ímpar");
        }
    });
}

parOuImpar([1, 2, 5, 6, 0]);