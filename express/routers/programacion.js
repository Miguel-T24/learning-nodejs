const express = require('express');

const {programacion} = require('../datos/cursos').infoCursos;

// router programacion
const routerProgramacion  = express.Router();

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

module.exports = routerProgramacion;