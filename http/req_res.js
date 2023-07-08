const http = require('http');

// Request Solicitud
// const server  = http.createServer((req,res) =>{
//     // Se realiza todo el proceso dentro del servidor

//     // req (Request): contiene la informacion que viene por pare del cliente que nos indica que debemos realizar
//     console.log('===> (Solicitud)');
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
// });

// Response Respuesta

const server = http.createServer((res)=>{
    // console.log("=====> Respuesta")
    // console.log(res.statusCode); //200
    // res.statusCode = 404;
    // console.log(res.statusCode);

    // Cambiar la cabecera
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());

    res.end('Hola, mundo');
});

const PUERTO = 3000;

server.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});