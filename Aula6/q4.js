function find(lista, funcFind) {
    const auxiliar = (indice) => {
        if (indice >= lista.length) {
            return undefined;
        }

        return funcFind(lista[indice], indice)
            ? lista[indice]
            : auxiliar(indice + 1);
    };

    return auxiliar(0);
}

const numeros = [5, 8, 12, 20];

console.log(find(numeros, x => x > 10));
console.log(find(numeros, x => x % 2 !== 0));
console.log(find(numeros, x => x === 100));