let n = 8.5

if (!Number.isInteger(n)) {
    throw new Error("Valor inválido: n precisa ser um número inteiro")
}

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`)
}

