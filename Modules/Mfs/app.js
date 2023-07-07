const fs = require('fs')

fs.readFile('./index.html','utf-8',(err,contenido) => {
    if(err){
        // console.log(err);
        throw(err) // Detiene la ejecucion del programa
    }else{
        console.log(contenido);
    }
});