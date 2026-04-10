let pessoas = [
    {nome: "João" , idade: 26 , ja_foi_a_Disney: true} ,
    {nome: "Jhon" , idade: 33 , ja_foi_a_Disney: false}
]

for (let p of pessoas) {
    console.log("Nome:", p.nome)
    console.log("Idade:", p.idade)
    console.log("Já foi pra Disney?", p.ja_foi_a_Disney)
}

