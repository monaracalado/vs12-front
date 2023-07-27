function trocarImagem(img) {
    let imagem = document.getElementById("mobyDyck");
  
    if (img == "Astral") {
      imagem.setAttribute('src', './assets/Moby_Dyck-Astral.png');
    } else if (img == "Latte") {
      imagem.setAttribute('src', './assets/Moby_Dyck-Latte.png');
    } else {
      imagem.setAttribute('src', './assets/Moby_Dyck.png');
    }
  }
  