const http = require('http');
const cursos = require("./cursos");

const server = http.createServer((req,res)=>{
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGet(req,res);
        case 'POST':
            return manejarSolicitudPost(req,res);
        default:
            res.statusCode = 501;
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
});


function manejarSolicitudGet(req, res){
    const path = req.url;

    if(path==='/'){
        res.statusCode = 200;
        res.end("Bienvenidos a mi primer servidor y API  creado con Node.js");
    }else if (path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else if (path === "/cursos/matematicas"){
        res.statusCode = 200;
        return es.end(JSON.stringify(cursos.infoCursos.matematicas))
    }
    res.statusCode = 404;
    res.end("No se ha encontrado el recurso solicitado");
}


function manejarSolicitudPost(req, res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}


PORT = 3000;

server.listen(PORT,()=>{
    console.log(`Ejecucion en el puerto ${PORT}`);
})