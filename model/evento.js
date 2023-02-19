const mongoose = require('../config/conexao');

const eventoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    inscritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'inscrito'
    }],
    ativo: {
        type: Boolean,
        default: true
    }
});

const evento = mongoose.model('evento', eventoSchema);

module.exports = evento