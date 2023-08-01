// Atividae 01
function ConexaoFalaha(time) {
  setTimeout(function () {
    alert("Sua conexão falhou!!!!");
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Sua conexão falhou!!!!";
  }, time);
}
function limparMensagem() {
  document.getElementById("mensagem").innerHTML = "";
}
//Atividade 02
function relogio() {
  const hora = new Date().getHours();
  const minutos = new Date().getMinutes();
  const segundos = new Date().getSeconds();

  const relogio = document.getElementById("relogio");
  relogio.innerHTML = `${hora}:${minutos}:${segundos}`;
}
let relogioIntervalo;
function startRelogio(time) {
  setTimeout(function () {
    relogio();
  }, time);
  relogioIntervalo = setInterval(relogio, 1000);
}
function limparRelogio() {
  clearInterval(relogioIntervalo);
  document.getElementById("relogio").innerHTML = "00:00:00";
}
//Atividade 03
let corIntervalo;
function corAleatoria() {
  const textCor = document.getElementById("cores");

  const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);

  textCor.style.color = corAleatoria;
}
function trocarCor() {
  corIntervalo = setInterval(corAleatoria, 2000);
}
function pararTroca() {
  clearInterval(corIntervalo);
}
//Atividade 04
function sortearNome() {
  const nomes = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Iris",
    "Rafael",
    "Samara",
  ];

  const nome = document.getElementById("nomes");

  const indiceAleatorio = Math.floor(Math.random() * nomes.length);

  nome.value = nomes[indiceAleatorio];
}
let sorteioIntervalo;
function começarSorteio() {
  const velocidade = parseFloat(document.getElementById("velocidade").value);
  const tempo = parseFloat(document.getElementById("tempo").value);
  sortearNome();
  sorteioIntervalo = setInterval(sortearNome, velocidade);
  setTimeout(pararSorteio, tempo);
}
function pararSorteio() {
  clearInterval(sorteioIntervalo);
}
function limparSorteio() {
  document.getElementById("velocidade").value = "";
  document.getElementById("tempo").value = "";
  document.getElementById("nomes").value = "";
}
//atividade 05
const pesquisarPersonagem = async () => {
  let personagem = document.getElementById("personagem").value;

  if (personagem.trim() === "") {
    document.getElementById(
      "resposta"
    ).innerHTML = `<h5>O campo personagem deve ser preenchido</h5>`;
  } else {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${personagem}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const dados = await response.json();

      if (dados.results.length === 0) {
        document.getElementById(
          "resposta"
        ).innerHTML = `<h5>Personagem não encontrado</h5>`;
      } else {
        const character = dados.results[0];
        document.getElementById(
          "resposta"
        ).innerHTML = `<div class="card" style="width: 16rem;">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Espécie:</b> ${character.species}</li>
                            <li class="list-group-item"><b>Status:</b> ${character.status}</li>
                            <li class="list-group-item"><b>Gênero:</b> ${character.gender}</li>
                        </ul>
                    </div><br>`;
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
};
function limparPersonagem() {
  document.getElementById("personagem").value = "";
  document.getElementById("resposta").innerHTML = "";
}
