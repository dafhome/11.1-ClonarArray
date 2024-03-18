const bebidas = ["Coca-cola", "Fanta", "Sprite", "Tónica", "Bitter Kas"];
console.log(bebidas);
const copiaBebidas = ["Coca-cola", "Fanta", "Sprite", "Tónica", "Bitter Kas"];
const bebidasOrdenadas = copiaBebidas.sort();
console.log(bebidasOrdenadas);
//console. log (bebidas);

bebidas[5] = "cacaolat";
console.log(bebidas);
console.log(bebidasOrdenadas);


const bebidasCopia2 = [].concat(bebidas);
bebidas.sort();
console.log(bebidasCopia2);