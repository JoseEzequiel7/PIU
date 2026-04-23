let n = '1222222222'

if (typeof n !== "number" || isNaN(n)) {
    console.log("Tipo inválido")
} else if (n > 0) {
    console.log("Positivo")
} else if (n < 0) {
    console.log("Negativo")
} else {
    console.log("Nulo/Zero")
}