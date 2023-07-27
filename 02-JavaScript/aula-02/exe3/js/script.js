let contador = 1;
function trocarNumero(){
    const trocarNumero = document.getElementById('trocarNumero');
    trocarNumero.innerText=contador;
    contador++;
}

function limparNumero(){
    const limparNumero = document.getElementById('trocarNumero');
    limparNumero = location.reload();
}