const mongoose = require('../config/conexao');

const inscritoSchema = new mongoose.Schema({
    nome:  {type:String,required:true},
    email: {type:String,required:true, unique:true},
    senha: {type:String,required:true},
    telefone: {type:String,required:true},
    admin: {type:Boolean,default:false}
});

const inscrito = mongoose.model('inscrito', inscritoSchema);

module.exports = inscrito