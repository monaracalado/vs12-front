function inserir(valor) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML += valor;
}

function limparTudo() {
  resultado.innerHTML = " ";
}

function limpar() {
  if (resultado.innerHTML) {
    let result = document.getElementById("resultado").innerHTML;
    resultado.innerHTML = result.slice(0, -1);
  }
}

function confirma() {
  if (resultado.innerHTML != "Erro") {
    document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
  }
}
