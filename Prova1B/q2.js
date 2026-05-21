class Livro {
    constructor(isbn, titulo, ano, status = "disponível") {
      this.isbn = isbn;
      this.titulo = titulo;
      this.ano = ano;
      this.status = status;
    }
  }
  
  class Biblioteca {
    constructor() {
      this.livros = [
        new Livro("111", "Dom Casmurro", 1899),
        new Livro("222", "O Hobbit", 1937, "emprestado"),
        new Livro("333", "Clean Code", 2008)
      ];
    }
  
    emprestar(isbn) {
      const livro = this.livros.find(l => l.isbn === isbn);
  
      if (!livro) {
        throw `Livro ${isbn} não está cadastrado`;
      }
  
      if (livro.status !== "disponível") {
        throw `Livro ${isbn} está ${livro.status}`;
      }
  
      livro.status = "emprestado";
  
      console.log(`Livro ${isbn} emprestado com sucesso`);
    }
  }
  
  const biblioteca = new Biblioteca();
  
  biblioteca.emprestar("333");
  
  console.log(biblioteca.livros);