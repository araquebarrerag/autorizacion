const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../autorizador.db3');

let estado = {};

// Crear nueva cuenta

router.post('/cuenta', (req, res)=>{
    let dato = req.body.cuenta;
    console.log(dato);
    estado[dato.id] = dato;
    console.log("Estado: ", estado);
})

router.get('/cuenta/:id', (req, res) => {
    console.log(req.params.id);
    console.log("Estado: ", estado[req.params.id]);
    return estado[req.params.id];
})

module.exports = router;
