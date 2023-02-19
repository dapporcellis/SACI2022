const Evento = require('../model/evento')
const Oficina = require('../model/oficina')
const Usuario = require('../model/usuario')
const Noticia = require('../model/noticia')
const Foto = require('../model/foto')

async function login(req, res) {
    const eventos = await Evento.find({ inscritos: { $in: [req.user.id] }, ativo: true });
    const oficinas = await Oficina.find({ inscritos: { $in: [req.user.id] }, ativo: true });
    res.render('admin/login', {
        Usuario: req.user,
        Eventos: eventos,
        Oficinas: oficinas
    })
}

async function logout(req, res) {
    req.logout(function (err) {
        req.flash('msgok', "Você saiu do sistema com sucesso.")
        res.redirect('/inscricao')
    });
}
//EVENTO
async function adicionaevento(req, res) {
    res.render('admin/adicionaevento', {
        Usuario: req.user
    })
}


async function adicionaevento1(req, res) {
    const evento = await Evento.create({
        nome: req.body.nome,
        data: req.body.data,
    })
    req.flash('ok', 'Evento adicionado com sucesso')
    res.redirect('/listaevento')
}

async function listaevento(req, res) {
    const eventos = await Evento.find({})
    res.render('admin/listaevento', {
        Usuario: req.user,
        Eventos: eventos,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    });
}

async function deletaevento(req, res) {
    await Evento.findByIdAndDelete(req.params.id, function (err, evento) {
        req.flash('ok', 'Evento deletado com sucesso')
        res.redirect('/listaevento')
    })
}

//OFICINA

async function adicionaoficinas(req, res) {
    res.render('admin/adicionaoficinas', {
        Usuario: req.user
    })
}

async function adicionaoficinas1(req, res) {
    const oficina = await Oficina.create(req.body)
    req.flash('ok', 'Oficina adicionado com sucesso')
    res.redirect('/listaoficinas')
}

async function listaoficinas(req, res) {
    const oficinas = await Oficina.find({})
    res.render('admin/listaoficinas', {
        Usuario: req.user,
        Oficinas: oficinas,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    });
}

async function deletaoficinas(req, res) {
    await Oficina.findByIdAndDelete(req.params.id, function (err, oficina) {
        req.flash('ok', 'Oficina deletado com sucesso')
        res.redirect('/listaoficinas')
    })
}

//NOTICIA

async function adicionanoticias(req, res) {
    res.render('admin/adicionanoticias', {
        Usuario: req.user,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function adicionanoticias1(req, res) {
    const noticia = await Noticia.create({
        nome: req.body.titulo,
        data: req.body.data,
        texto: req.body.texto,
        foto: req.file.path
    })
    req.flash('ok', 'Notícia adicionada com sucesso.')
    res.render('admin/adicionanoticias', {
        Usuario: req.user,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function listanoticias(req, res) {
    const noticias = await Noticia.find({})
    res.render('admin/listanoticias', {
        Usuario: req.user,
        Noticias: noticias,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function deletanoticias(req, res) {
    await Noticia.findByIdAndDelete(req.params.id, function (err, noticia) {
        req.flash('ok', 'Noticia deletada com sucesso')
        res.redirect('/listanoticias')
    })
}

//FOTO
async function adicionafotos(req, res) {
    res.render('admin/adicionafotos', {
        Usuario: req.user,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function adicionafotos1(req, res) {
    const foto = await Foto.create({
        titulo: req.body.titulo,
        data: req.body.data,
        foto: req.file.path
    })
    req.flash('ok', 'Foto adicionada com sucesso.')
    res.render('admin/adicionafotos', {
        Usuario: req.user,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function listafotos(req, res) {
    const fotos = await Foto.find({})
    res.render('admin/listafotos', {
        Usuario: req.user,
        Fotos: fotos,
        msg: req.flash('msg'),
        msgok: req.flash('ok')
    })
}

async function deletafotos(req, res) {
    await Foto.findByIdAndDelete(req.params.id, function (err, foto) {
        req.flash('ok', 'Noticia deletada com sucesso')
        res.redirect('/listafotos')
    })
}


async function certificados(req, res) {
    res.render('admin/certificados', {
        Usuario: req.user
    })
}
async function oficinas(req, res) {
    const oficinas = await Oficina.find({ inscritos: { $in: [req.user.id] } , ativo: true});
    const oficinas1 = await Oficina.find({ ativo: true, temvaga:true});
    console.log(oficinas)
    console.log(oficinas1)
    res.render('admin/oficinas', {
        Usuario: req.user,
        MinhasOficinas: oficinas,
        Oficinas: oficinas1
    })
}

async function inscreveroficina(req, res) {
    const oficina = await Oficina.findById(req.body.oficina);
    const usuario = await Usuario.findById(req.user.id);

    // Adiciona o usuário ao array de inscritos do evento
    oficina.inscritos.push(usuario);
    await oficina.save(async function (err) {
        if(err){
            req.flash('msg','Não há vagas na oficina')
            res.redirect('/oficinas');
        }else{
            // Adiciona o evento ao array de eventos inscritos do usuário
            usuario.oficinas.push(oficina);
            await usuario.save();
            req.flash('msgok','Parabens! Você esta inscrito na oficina')
            res.redirect('/oficinas');
        }
    });
}

async function evento(req, res) {
    const eventos = await Evento.find({ inscritos: { $in: [req.user.id] } , ativo: true});
    const eventos1 = await Evento.find({ ativo: true});
    res.render('admin/evento', {
        Usuario: req.user,
        MeusEventos: eventos,
        Eventos: eventos1
    })
}

async function inscrever(req, res) {
    const evento = await Evento.findById(req.body.evento);
    const usuario = await Usuario.findById(req.user.id);

    // Adiciona o usuário ao array de inscritos do evento
    evento.inscritos.push(usuario);
    await evento.save();

    // Adiciona o evento ao array de eventos inscritos do usuário
    usuario.eventos.push(evento);
    await usuario.save();

    req.flash('msgok','Parabens! Você esta inscrito no evento')
    res.redirect('/evento');
}

async function listainscritos(req, res) {
    const oficina = await Oficina.findById(req.params.id).populate('inscritos');
    res.render('admin/listainscritos',{Usuario: req.user, Usuarios: oficina.inscritos, Oficina:oficina})
}

async function listainscritosevento(req, res) {
    const evento = await Evento.findById(req.params.id).populate('inscritos');
    res.render('admin/listarinscritosevento',{Usuario: req.user, Usuarios: evento.inscritos, Evento:evento})
}

module.exports = {
    listainscritosevento,
    listainscritos,
    inscreveroficina,
    inscrever,
    login,
    logout,
    adicionafotos,
    adicionafotos1,
    deletafotos,
    listafotos,
    adicionanoticias,
    adicionanoticias1,
    deletanoticias,
    listanoticias,
    adicionaoficinas,
    adicionaoficinas1,
    deletaoficinas,
    listaoficinas,
    listaevento,
    adicionaevento,
    adicionaevento1,
    deletaevento,
    certificados,
    oficinas,
    evento
}