const express = require('express');

// Simulando una base de datos
const {matematicas} = require('../datos/cursos').infoCursos;

// router
const routerMatematicas  = express.Router();

routerMatematicas.get('/',(req,res) =>{
    res.send(JSON.stringify(matematicas));
});

// praticar parametros para cursos de matematicas
routerMatematicas.get('/:tema',(req,res)=>{
    const tema = req.params.tema;
    const resultados  = matematicas.filter(curso => curso.tema == tema);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.send(resultados);

    // res.send(JSON.stringify(matematicas));
});

module.exports = routerMatematicas;