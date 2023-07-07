function ordenarProducto(producto){
return new Promise((resolve,reject)=>{
    console.log(`Ordenando: ${producto} de freecodecamp`);
    setTimeout(() => {
        if(producto === 'taza'){
            resolve("Ordenando un taza con el logo de freecodecamp")
        }else{
            reject('Este producto no esta disponible');
        }
    }, 2000);
});
}

function procesarPedido(respuesta){
return new Promise((resolve)=>{
    console.log("Procesando respuesta...");
    console.log(`la respuesta fue: "${respuesta}"`);
    setTimeout(() => {
        resolve('Gracias por tu compra!!!');
    }, 4000);
})
}

// ordenarProducto('lapiz') //taza
// .then(respuesta =>{
//     console.log('respuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);
// })
// .then(respuestaProcesada=>{
//     console.log(respuestaProcesada);
// })
// .catch(err=>{
//     console.log(err);
// })


// Async-Await

async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada)
    }catch(err){
        console.log(err);
    }
}

realizarPedido('taza');