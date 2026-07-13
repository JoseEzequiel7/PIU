function fibonacciSequencia(n) {
    const auxiliar = (a, b, restantes) => {
        if (restantes === 0) return [];
        return [a, ...auxiliar(b, a + b, restantes - 1)];
    };

    return auxiliar(0, 1, n);
}

// testes
const calculado = fibonacciSequencia(8)
const esperado = [ 0, 1, 1, 2, 3, 5, 8, 13 ]
const iguais = calculado.every((val, index) => val === esperado[index]);
console.assert(iguais, `Esperava ${esperado}, recebeu ${calculado}`);