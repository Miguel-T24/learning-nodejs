const fs = require('fs')

// Read File
// fs.readFile('./index.html','utf-8',(err,contenido) => {
//     if(err){
//         // console.log(err);
//         throw(err) // Detiene la ejecucion del programa
//     }else{
//         console.log(contenido);
//     }
// });


// rename
// fs.rename('index.html','main.html', (err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('Nombre cambiado exitosamente');
//     }
// })

// Add a content to final of the file
// fs.appendFile('index.html','<p>Hola</p>', (err) =>{
//     if(err){
//         throw err;
//     }else{
//         console.log('Archivo actualizado!')
//     }
// })

// Reemplazar todo el contenido del archivo

fs.writeFile('index.html', 'contenido nuevo',(err)=>{
    if(err){
        throw err
    }else{
        console.log('Contenido reemplazado exitosamente!')
    }
});