function eBissexto(ano){
    return (ano % 400 == 0) || ((ano % 4 == 0) && (!ano % 100 == 0)) ? console.log(`O ano ${ano} é bissexto`) : console.log(`O ano ${ano} não é bissexto`);
}

eBissexto(2023);