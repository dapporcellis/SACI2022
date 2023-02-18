const mongoose = require('../config/conexao');

const oficinaSchema = new mongoose.Schema({
    nome:  {type:String,required:true},
    data: {type:Date,required:true},
    ministrante: {type:String,required:true},
    ordem: {type:Number,required:true},
    vagas: {type:Number,required:true},
    ativo: {type:Boolean,default:true},
    inscritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'incrito'
    }],
});

oficinaSchema.pre('validate', function(next) {
    if (this.inscritos.length == this.vagas){
        this.ativo = false;
    }
    next();
});

const oficina = mongoose.model('oficina', oficinaSchema);

module.exports = oficina