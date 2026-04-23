function contarParesImpares(lista) {
    let pares = 0
    let impares = 0

    for (let n of lista) {
        if (!Number.isInteger(n)) {
            throw new Error("Todos os valores precisam ser inteiros")
        }

        if (n % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }

    return {
        pares: pares,
        impares: impares
    }
}

let numeros = [17, 83, 42, 5, 91, 2.8, 64, 10]

let resultado = contarParesImpares(numeros)
console.log(resultado)

