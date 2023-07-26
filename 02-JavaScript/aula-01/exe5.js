let segundos = 600000;
let dias = segundos / 86400;
let restoDia = segundos % 86400;
let horas = restoDia / 3600;
let restoHora = restoDia % 3600;
let minutos = restoHora / 60;
let segundosFinais = restoHora % 60;

console.log(`Em ${segundos} segundos temos: ${Math.floor(dias)} dias, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos e ${Math.floor(segundosFinais)} segundos.`)