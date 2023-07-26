const anoAtual = new Date().getFullYear();

let anosPassados = anoAtual - 1500;
let geracoesPassadas = anosPassados/28;

console.log("O número de gerações passadas foram: " + parseInt(geracoesPassadas))