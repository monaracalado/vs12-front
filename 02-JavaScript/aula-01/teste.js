function mediaPonderada(n1,p1,n2,p2,n3,p3){
    return ((n1*p1 + n2*p2 + n3*p3)/(p1 + p2 + p3)).toFixed(2)
}

console.log(mediaPonderada(7.5,2,8.0,3,6.5,2));