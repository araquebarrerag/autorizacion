const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creamos el schema para la Transaccion

const transaccionSchema = new Schema({
    idCuente: {type: Number, required: true},
    comerciante: {type: String, required: true},
    cantidad: {type: Number, required: true},
    tiempo: {type: Date, required: true}
}, { timesTamps: {} });

module.exports = mongoose.model('Transaccion', transaccionSchema);

