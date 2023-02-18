const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller')
const passport = require('../config/passport');

routes.get('/', controller.index)
routes.get('/cadastro', controller.cadastro)
routes.post('/cadastro', controller.cadastrar)
routes.get('/contato', controller.contato)
routes.get('/fotos', controller.fotos)
routes.get('/local', controller.local)
routes.get('/noticias', controller.noticias)
routes.get('/organizacao', controller.organizacao)
routes.get('/programacao', controller.programacao)
routes.get('/sobre', controller.sobre)
routes.get('/inscricao', controller.inscricao)
routes.post('/inscricao', passport.authenticate('local', {
    successRedirect: '/login',
    failureRedirect: '/inscricao',
    failureFlash : true
}))





module.exports = routes