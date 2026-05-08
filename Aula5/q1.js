function getStatus(condicao) {
  if (condicao) {
    return Promise.resolve("Sucesso!");
  } else {
    return Promise.reject("Falha!");
  }
}

getStatus(true)
  .then((msg) => console.log(msg))
  .catch((erro) => console.error(erro));