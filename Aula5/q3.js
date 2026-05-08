function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Terminou!");
    }, ms);
  });
}

const tempo = 2000;
console.log(`Esperando ${tempo}ms...`);

esperar(tempo).then((msg) => console.log(msg));

console.log("Isso aparece ANTES do 'Terminou!'"); 