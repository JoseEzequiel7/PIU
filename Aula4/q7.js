class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} emitiu um som.`;
    }
}

class Cachorro extends Animal {
    falar() {
        return `${this.nome} latiu: Au au!`;
    }
}

class BemTeVi extends Animal {
    falar() {
        return `${this.nome} cantou: Bem-te-vi!`;
    }
}

const dog = new Cachorro("Rex");
const ave = new BemTeVi("Amarelinho");

console.log(dog.falar());
console.log(ave.falar());