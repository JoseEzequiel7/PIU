function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    };
}

const p1 = new Pessoa("João", 20);
const p2 = new Pessoa("Maria", 30);

console.log(p1.apresentar());
console.log(p2.apresentar());