// setImmediate(function, argument1, argumento2)

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`)
}

console.log("Antes de setImmediate")
setImmediate(mostrarTema,'Nodejs');
console.log("Despues del setImmediate");