class Funcionario {
    #nome;
    #salarioBase;

    constructor(nome, salarioBase) {
        this.#nome = nome;
        this.#salarioBase = salarioBase;
    }

    #calcularBonus() {
        return this.#salarioBase * 0.10;
    }

    salarioTotal() {
        return this.#salarioBase + this.#calcularBonus();
    }
}

const f = new Funcionario("Carlos", 2000);
console.log(f.salarioTotal());

