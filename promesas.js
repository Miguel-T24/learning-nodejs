const promesaCumplida = false

const miPromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa Cumplida');
        }else{
            reject('Promesa Rechazada');
        }
    },3000);
});


const manejarPromesaCumplida = (razonCumplida) =>{
    console.log(razonCumplida)
}
const manejarPromesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)