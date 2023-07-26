function ePrimo(valor){
    if(valor <=1) return false;
    if(valor <=3) return true;

    if(valor % 2 === 0 || valor % 3 === 0) return false;

    for (let i = 5; i * i <= valor; i += 6){
        if(valor % i === 0 || valor % (i + 2) ===0) return false;
    }

    return true;
}

function primoGemeo(N){

    for(let i = 2; i <= N - 2; i++) {
        if(ePrimo(i) && ePrimo(i + 2)){
            console.log(`${i} e ${i + 2} são primos gemeos`)
        }
    }
}

primoGemeo(100);