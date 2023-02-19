const Inscrito = require("../model/usuario")
const Noticia = require("../model/noticia")
const Foto = require("../model/foto")
const bcrypt = require("bcrypt")

async function index(req, res) {
    res.render('pages/index')
}

async function cadastro(req, res) {
    res.render('pages/cadastro',{msg:req.flash('msg')})
}

async function cadastrar(req, res) {

    const salt = bcrypt.genSaltSync(10);
    const senha = bcrypt.hashSync(req.body.senha, salt);

    const inscrito = new Inscrito({
        nome: req.body.nome,
        telefone: req.body.telefone,
        email: req.body.email,
        senha: senha
    })
    await inscrito.save(function (err, result) {
        if(err){
            if (err.message.indexOf("duplicate")!=-1) {
                req.flash('msg', "Você já cadastrou o Email")
                res.redirect('/cadastro')
            }else if(err){
                req.flash('msg', "Erro interno, tente novamente mais tarde.")
                res.redirect('/cadastro')
            }
        }else{
            req.flash('ok', "Cadastrado com sucesso.")
            res.redirect('/inscricao')
        }
    })    
}

async function contato(req, res) {
    res.render('pages/contato')
}

async function fotos(req, res) {
    const fotos = await Foto.find({})
    res.render('pages/fotos', {Fotos: fotos})
}

async function local(req, res) {
    res.render('pages/local')
}

async function noticias(req, res) {
    const noticias = await Noticia.find({})
    res.render('pages/noticias', {Noticias:noticias})
}

async function organizacao(req, res) {
    res.render('pages/organizacao')
}

async function programacao(req, res) {
    res.render('pages/programacao')
}

async function sobre(req, res) {
    res.render('pages/sobre')
}

async function inscricao(req, res) {
    res.render('pages/inscricao', {'msg': req.flash('msg'), 'msgok': req.flash('msgok')})
}

module.exports = {
    index,
    inscricao,
    sobre,
    programacao,
    organizacao,
    noticias,
    local,
    fotos,
    contato,
    cadastro,
    cadastrar
}