const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../autorizador.db3');

let estado = {};
let estadoTransaccion = {};

// Crear nueva cuenta

router.post('/cuenta', (req, res)=>{
    let dato = req.body.cuenta;
    estado[dato.id] = dato;
    console.log("Estado: ", estado);
    res.status(200);
    let array = 
    {
        "cuenta": 
        {
            "id": estado.id,
            "tarjeta_activa": estado.tarjeta_activa,
            "límite_disponible": estado.límite_disponible
        },
        "violaciones": []
    };
    res.json(array);
})

// Traer la cuenta por id

router.get('/cuenta/:id', (req, res) => {
    console.log(req.params.id);
    console.log("Estado: ", estado[req.params.id]);
    res.status(200);
    res.json(estado[req.params.id]);
})

// Crear nueva transaccion

router.post('/transaccion', (req, res) => {
    let dato = req.body.transacción;
    estadoTransaccion[dato.id] = dato;
    console.log("Estado: ", estadoTransaccion);
})

// Traemos todas las transacciones que tengan un mismo id de cuenta

router.get('/transaccion/:id', (req, res) => {
    console.log(req.params.id);
    console.log("Estado Salida: ", estadoSalida[req.params.id]);
    return estadoSalida[req.params.id]
})

module.exports = router;
