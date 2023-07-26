function estrela() {
  let estrela = "";
  for (let i = 0; i < 50; i++) {
    estrela += "*";
  }
  return estrela;
}

function primeiroTexto() {
  let primeiroTexto = `\nBEM-VINDO AO MEU PROGRAMA\n`;
  return primeiroTexto;
}

function segundoTexto() {
  let segundoTexto = "\nELE REALMENTE FUNCIONA\n";
  return segundoTexto;
}

function terceiroTexto() {
  let terceiroTexto = "\nEU USEI FUNÇÃO PARA FAZER ISSO";
  return terceiroTexto;
}

function textoCompleto() {
  console.log(estrela(),primeiroTexto(),estrela(),segundoTexto(),estrela(),terceiroTexto());
}


textoCompleto();