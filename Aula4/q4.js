class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    area() {
        return this.altura * this.largura;
    }
}

const r = new Retangulo(15, 5);
console.log(r.area());