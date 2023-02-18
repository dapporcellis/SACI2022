async function login(req, res) {
    res.render('admin/login', {Usuario:req.user})
}

async function logout(req, res) {
    req.logout(function(err) {
        req.flash('msgok', "Você saiu do sistema com sucesso.")    
        res.redirect('/inscricao')
    });
}

async function adicionafotos(req, res) {
    res.render('admin/adicionafotos', {Usuario:req.user})
}

async function listafotos(req, res) {
    res.render('admin/listafotos', {Usuario:req.user})
}

async function adicionanoticias(req, res) {
    res.render('admin/adicionanoticias', {Usuario:req.user})
}

async function listanoticias(req, res) {
    res.render('admin/listanoticias', {Usuario:req.user})
}

async function adicionaoficinas(req, res) {
    res.render('admin/adicionaoficinas', {Usuario:req.user})
}

async function listaoficinas(req, res) {
    res.render('admin/listaoficinas', {Usuario:req.user})
}

async function listaevento(req, res) {
    res.render('admin/listaevento', {Usuario:req.user})
}

async function adicionaevento(req, res) {
    res.render('admin/adicionaevento', {Usuario:req.user})
}

async function certificados(req, res) {
    res.render('admin/certificados', {Usuario:req.user})
}
async function oficinas(req, res) {
    res.render('admin/oficinas', {Usuario:req.user})
}
async function evento(req, res) {
    res.render('admin/evento', {Usuario:req.user})
}


module.exports = {
    login,
    logout,
    adicionafotos,
    listafotos,
    adicionanoticias,
    listanoticias,
    adicionaoficinas,
    listaoficinas,
    listaevento,
    adicionaevento,
    certificados,
    oficinas,
    evento
}