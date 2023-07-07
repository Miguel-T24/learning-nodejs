// const promesaCumplida = false

// const miPromesa = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         if(promesaCumplida){
//             resolve('Promesa Cumplida');
//         }else{
//             reject('Promesa Rechazada');
//         }
//     },3000);
// });


// const manejarPromesaCumplida = (razonCumplida) =>{
//     console.log(razonCumplida)
// }
// const manejarPromesaRechazada = (razonRechazo) =>{
//     console.log(razonRechazo);
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

// Ejercicio

const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    return estatus;
};

// for (let i = 0 ; i < 10 ; i++){
//     console.log(estatusPedido());
// }



const miPedidoPizza = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(estatusPedido()){
            resolve('Pizza esta en camino');
        }
        else{
            reject('La pizza se perdio!!');
        }
    }, 3000);
})

const manejarPromesaCumplida = (razonCumplida) =>{
    console.log(razonCumplida);
};

const manejarPromesaRechazada = (razonRechazo)=>{
    console.log(razonRechazo);
};


miPedidoPizza.then(manejarPromesaCumplida,manejarPromesaRechazada);


// Utilizando un soolo bloque de codigo
miPedidoPizza
.then((manejarPromesaCumplida)=>{
    console.log(manejarPromesaCumplida);
})
.catch((manejarPromesaRechazada)=>{
    console.log(manejarPromesaRechazada);
})