let n = [17, 83, 42, 5, 91, 28, 64, 10]

let pares = 0
let impares = 0

for (let nm of n) {
    if (nm % 2 === 0) {
        pares++
    } else {
        impares++
    } 
}

console.log("Pares:" , pares)
console.log("Impares:" , impares)

