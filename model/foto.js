const mongoose = require('../config/conexao');

const fotoSchema = new mongoose.Schema({
    titulo:  {type:String,required:true},
    data: {type:Date,required:true},
    foto: {type:String,required:true},
});

const foto = mongoose.model('foto', fotoSchema);

module.exports = foto