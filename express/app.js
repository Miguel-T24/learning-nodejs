const express = require('express');
const app = express();

// simulando una base de datos con un archivo javascript
const {infoCursos} = require('./datos/cursos');


// Peticiones
app.get('/',(req,res)=>{
    res.send("Mi primer servidor con express");
});

app.get('/api/cursos', (req,res)=>{
    res.send(JSON.stringify(infoCursos));
});

// routers
// Router programacion
const routerProgramacion  = require('./routers/programacion');
app.use('/api/cursos/programacion', routerProgramacion);;

// router matematicas
const routerMatematicas = require("./routers/matematicas")
app.use('/api/cursos/matematicas',routerMatematicas);


// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`El sevidor esta escuchando en el puerto ${PORT}`);
});