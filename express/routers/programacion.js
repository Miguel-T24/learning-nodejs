const express = require('express');

const {programacion} = require('../datos/cursos').infoCursos;

// router programacion
const routerProgramacion  = express.Router();
// middleware
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res)=>{
    res.send(JSON.stringify(programacion));
})

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    // Si quiero ordenarlos con base al numero de vistas
    // console.log(req.query.ordenar);

    if(req.query.ordenar === 'vistas'){
        res.send(JSON.stringify(resultados.sort((a,b)=> b.vistas - a.vistas)));
    }else{
        res.send(JSON.stringify(resultados));
    }
    res.send(JSON.stringify(resultados))
    // res.send(JSON.stringify(programacion));
});


// Si quisieramos filtrar por lenguaje y por nivel
routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    resultado = programacion.filter(curso => (curso.lenguaje === lenguaje) && (curso.nivel === nivel));

    if(resultado.length === 0){
        return res.status(404).send(`No se encontro curso de ${lenguaje} del nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultado));
});


routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});


routerProgramacion.put('/:id',(req,res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >=0){
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(programacion));
});

// Solo los valores que queremos modificar
routerProgramacion.patch('/:id',(req,res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice>=0){
        const cursoModificar = programacion[indice];
        Object.assign(cursoModificar,infoActualizada);
    }
    res.send(JSON.stringify(programacion));
})

routerProgramacion.delete('/:id',(req,res)=>{
    const id = req.params.id;

    const idx = programacion.findIndex(curso => curso.id == id);

    if(idx >= 0){
        programacion.splice(idx,1);
    }

    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;