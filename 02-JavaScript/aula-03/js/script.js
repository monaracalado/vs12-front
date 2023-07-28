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
            alert("Check-out realizado, até a proxima. <3")
        }
      break;
    case 3:
        const estender = parseInt(prompt("Quantos dias dezeja estender?"));
      
        if (!isNaN(estender) && estender > 0) {
            alert(`Hospedagem estendida com sucesso em ${estender} dias!`)
        }else{
            alert("Informe um valor valido!")
        }
      break;
    case 4:
      alert("Ok");
      break;
  }
}
//atividade 4
function calcularSubs(){
    const subs1 = parseInt(document.getElementById("subs1").value);
  const subs2 = parseInt(document.getElementById("subs2").value);
}