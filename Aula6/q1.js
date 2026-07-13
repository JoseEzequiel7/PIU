function map(lista, funcMap) {
    const auxiliar = (indice) => {
        if (indice >= lista.length) {
            return [];
        }

        return [
            funcMap(lista[indice], indice),
            ...auxiliar(indice + 1)
        ];
    };

    return auxiliar(0);
}

const numeros = [1, 2, 3, 4];

console.log(map(numeros, x => x * 2));
console.log(map(numeros, (x, i) => x + i));