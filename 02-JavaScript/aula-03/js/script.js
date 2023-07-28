//atividade 1
function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
  let resultado = document.getElementById("resultado");
  console.log(nota1 + nota2 + nota3);
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    resultado.innerHTML = "Por favor, insira números válidos.";
    return;
  }

  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    resultado.innerHTML = "Nosso sistema utiliza notas de 0 a 10";
    return;
  }

  if (media < 5) {
    resultado.innerHTML = `Reprovado, sua media foi: ${media}`;
    return;
  } else if (media >= 5 && media <= 7) {
    resultado.innerHTML = `Recuperação, sua media foi: ${media}`;
    return;
  } else {
    resultado.innerHTML = `Aprovado, sua media foi: ${media}`;
    return;
  }
}
function limparMedia() {
  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("resultado").innerHTML = "";
}
//atividade 2
function calcularNumerosPares() {
  let soma = 0;
  for (let i = 0; i <= 100; i += 2) {
    soma += i;
  }
  const somaPares = (document.getElementById("somaPares").innerHTML = soma);
}
function limparNumerosPares() {
  document.getElementById("somaPares").innerHTML =
    "O resultado será mostrado aqui!";
}
//atividadde 3
function relogio() {
  const hora = new Date().getHours();
  const minutos = new Date().getMinutes();
  const segundos = new Date().getSeconds();

  const relogio = document.getElementById("relogio");
  relogio.innerHTML = `${hora}:${minutos}:${segundos}`;
}
let relogioIntervalo;
function startRelogio() {
  relogio();
  relogioIntervalo = setInterval(relogio, 1000);
  setTimeout(stopRelogio, 60000);
}
function stopRelogio() {
  clearInterval(relogioIntervalo);
}
//atividade 4
function menuHotel(opcao) {
  switch (opcao) {
    case 1:
      alert("Boas vindas");
      break;
    case 2:
      const confirmeOut = confirm("Tem certeza que deseja fazer o check-out?");

      if (confirmeOut) {
        alert("Check-out realizado, até a proxima. <3");
      }
      break;
    case 3:
      const estender = parseInt(prompt("Quantos dias dezeja estender?"));

      if (!isNaN(estender) && estender > 0) {
        alert(`Hospedagem estendida com sucesso em ${estender} dias!`);
      } else {
        alert("Informe um valor valido!");
      }
      break;
    case 4:
      alert("Ok");
      break;
  }
}
//atividade 4
function calcularSubs() {
  const subs1 = parseInt(document.getElementById("subs1").value);
  const subs2 = parseInt(document.getElementById("subs2").value);
  const sub2Ajust = subs2 + 2;
  const resultSubs = document.getElementById("resultSubs");

  if (subs1 == sub2Ajust) {
    resultSubs.innerHTML = "As quantidades são iguais.";
  } else {
    resultSubs.innerHTML = "As quantidades não são iguais.";
  }
}
function limparSubs() {
  document.getElementById("subs2").value = "";
  document.getElementById("subs1").value = "";
  document.getElementById("resultSubs").innerHTML = "";
}
//atividade 6
function imprimirPares() {
  let numero = 1;

  while (numero <= 100) {
    if (numero % 2 === 0) {
      console.log(numero);
    }
    numero++;
  }

  console.log("FIM");
}
//atividade 7
function idade() {
  let idade = parseInt(prompt("Digite sua idade:"));
  while (isNaN(idade) || idade < 0) {
    alert("Escreva um valor valido!");
    idade = parseInt(prompt("Digite sua idade:"));
  }
  alert(`Sua idade é ${idade}`);
}
//atividade 8
function salario() {
  const anoContratacao = 2013;
  const anoAtual = new Date().getFullYear();
  const salarioInicial = 1000;
  const aumentoAnual = 0.015;
  let percentualAumento = aumentoAnual;

  let salarioAtual = salarioInicial;
  let percentualAumentoTotal = 0;

  for (let ano = anoContratacao + 1; ano <= anoAtual; ano++) {

    if (ano >= 2017) {
      percentualAumento *= 2;
    }

    const aumento = salarioAtual * percentualAumento;
    salarioAtual += aumento;
    percentualAumentoTotal += percentualAumento * 100;

    console.log(
      `Ano ${ano}: Salário R$ ${salarioAtual.toFixed(2)} (${(
        percentualAumento * 100
      ).toFixed(2)}% de aumento)`
    );
  }

  const percentualAumentoSoma =
    ((salarioAtual - salarioInicial) / salarioInicial) * 100;
  console.log(
    `Percentual de aumento total em relação a 2013: ${percentualAumentoSoma.toFixed(2)}%`
  );
}
//atividade 9
function fibonacci(){
    let penultimo = 0;
    let ultimo = 1;

    console.log(penultimo);
    console.log(ultimo);

    for(let i = 2; i < 20; i++) {
        const  proximo = ultimo + penultimo;
        console.log(proximo);

        penultimo = ultimo;
        ultimo = proximo;
    }
}
//atividade 10
function numerosPrimos(n){
    const numeros = new Array(n + 1).fill(true);

    numeros[0] = false;
    numeros[1] = false;

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(numeros[i]){
            for(let j = i*i;j <=n; j+=i){
                numeros[j] = false;
            }
        }
    }

    const numeroPrimos = [];
    for(let i = 2; i <=n; i++) {
        if(numeros[i]){
            numeroPrimos.push(i);
        }
    }
    return numeroPrimos;
}
function chamarNumerosPrimos() {
    const numeroPrimo = document.getElementById("numerosPrimos");
    const n = parseInt(numeroPrimo.value);

    if (isNaN(n) || n <= 1) {
      alert("Por favor, digite um número inteiro positivo maior que 1.");
      return;
    }

    const primosEncontrados = numerosPrimos(n);
    const resultado = document.getElementById("resultadoPrimo");
    resultado.innerHTML = "Números primos encontrados até " + n + ": " + primosEncontrados.join(", ");
  }
  function limparNumerosPriomos(){
    document.getElementById("numerosPrimos").value = "";
  document.getElementById("resultadoPrimo").innerHTML = "";
  }