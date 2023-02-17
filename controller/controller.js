async function index(req, res) {
    res.render('pages/index')
}

async function cadastro(req, res) {
    res.render('pages/cadastro')
}

async function contato(req, res) {
    res.render('pages/contato')
}

async function fotos(req, res) {
    res.render('pages/fotos')
}

async function local(req, res) {
    res.render('pages/local')
}

async function login(req, res) {
    res.render('pages/login')
}

async function noticias(req, res) {
    res.render('pages/noticias')
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
    res.render('pages/inscricao')
}

module.exports = {
    index,
    inscricao,
    sobre,
    programacao,
    organizacao,
    noticias,
    login,
    local,
    fotos,
    contato,
    cadastro
}