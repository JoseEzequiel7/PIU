function validarNome(nome) {
    if (typeof nome !== "string" || nome.trim() === "") {
        throw new Error("Nome inválido")
    }
}

function validarIdade(idade) {
    if (!Number.isInteger(idade) || idade < 0) {
        throw new Error("Idade inválida")
    }
}

function validarFoiADisney(valor) {
    if (typeof valor !== "boolean") {
        throw new Error("Valor em 'ja_foi_a_Disney' inválido")
    }
}

let pessoa = {
    nome: "Vinicius",
    idade: 99,
    ja_foi_a_Disney: false
}

validarNome(pessoa.nome)
validarIdade(pessoa.idade)
validarFoiADisney(pessoa.ja_foi_a_Disney)

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.ja_foi_a_Disney)

