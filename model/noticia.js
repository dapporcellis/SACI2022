const mongoose = require('../config/conexao');

const noticiaSchema = new mongoose.Schema({
    nome:  {type:String,required:true},
    data: {type:Date,required:true},
    texto: {type:String,required:true},
    foto: {type:String,required:true},
});

const noticia = mongoose.model('noticia', noticiaSchema);

module.exports = noticia