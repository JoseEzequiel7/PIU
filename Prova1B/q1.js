let vacinas = [ 
    { nome: 'V8', dia: 15, mes: 5, ano: 2026 }, 
    { nome: 'Antirrábica', dia: 10, mes: 4, ano: 2025 }, 
    { nome: 'Leishmaniose', dia: 20, mes: 6, ano: 2027 }, 
    { nome: 'Giárdia', dia: 15, mes: 4, ano: 2026 }, 
    { nome: 'Gripe Canina', dia: 5, mes: 5, ano: 2026 }, 
    { nome: 'Sei lá o que mais', dia: 15, mes: 6, ano: 2023 }, 
]

function VacinaAtrasada(vacinas) {
    vacinas.forEach((v) => {
        if (v.dia < 15) {
            return console.log(v)
        } else if (v.mes < 5) {
            return console.log(v)
        } else if (v.ano < 2026) {
            return console.log(v)
        }
    
})
}

VacinaAtrasada(vacinas);