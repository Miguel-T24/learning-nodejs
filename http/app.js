const http = require('http');

const servidor = http.createServer((req,res) =>{
    // Realizar el proceso y al final llamamos a end y luego le pasamos como parametro el resultado que queremos al cliente
    console.log("Solicitud nueva");
    res.end('Hola, Mundo');
});

const PUERTO = 3001;

servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
})