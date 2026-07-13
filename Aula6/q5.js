function forEach(lista, funcForEach) {
    const auxiliar = (indice) => {
        if (indice >= lista.length) {
            return;
        }

        funcForEach(lista[indice], indice);
        auxiliar(indice + 1);
    };

    auxiliar(0);
}

const numeros = [10, 20, 30];

forEach(numeros, (valor, indice) => {
    console.log(`Índice: ${indice}, Valor: ${valor}`);
});