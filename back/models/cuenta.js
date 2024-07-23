const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creamos el schema para la cuenta

const cuentaSchema = new Schema({
    id: {type: Number, required: true},
    tarjeta_activa: {type: Boolean, required: true},
    limite_disponible: {type: Number, required: true}
}, { timesTamps: {} });

module.exports = mongoose.model('Cuenta', cuentaSchema);