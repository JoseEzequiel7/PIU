function filter(lista, funcFilter) {
    const auxiliar = (indice) => {
        if (indice >= lista.length) {
            return [];
        }

        const resto = auxiliar(indice + 1);

        return funcFilter(lista[indice], indice)
            ? [lista[indice], ...resto]
            : resto;
    };

    return auxiliar(0);
}

const numeros = [1, 2, 3, 4, 5, 6];

console.log(filter(numeros, x => x % 2 === 0));
console.log(filter(numeros, x => x > 3));
console.log(filter(numeros, (x, i) => i < 3));