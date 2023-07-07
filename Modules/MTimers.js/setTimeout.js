// setTimeout()
function mostrarTema(tema){
    console.log(`Estoy Aprendiendo ${tema}`);
}
// mostrarTema("NodeJs");
setTimeout(mostrarTema,5000,'NodeJs');


function sumar(n1,n2){
    console.log(n1+n2);
}

setTimeout(sumar,2000,5,6);