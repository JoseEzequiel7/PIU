function reduce(lista, funcReduce, acumuladorInicial) {
    const auxiliar = (indice, acumulador) => {
        if (indice >= lista.length) {
            return acumulador;
        }

        return auxiliar(
            indice + 1,
            funcReduce(acumulador, lista[indice], indice)
        );
    };

    return auxiliar(0, acumuladorInicial);
}

const numeros = [1, 2, 3, 4];

console.log(reduce(numeros, (acc, x) => acc + x, 0));
console.log(reduce(numeros, (acc, x) => acc * x, 1));
console.log(reduce(numeros, (acc, x) => acc + x.toString(), ""));