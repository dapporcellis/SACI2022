const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller')

routes.get('/', controller.index)
routes.get('/cadastro', controller.cadastro)
routes.get('/contato', controller.contato)
routes.get('/fotos', controller.fotos)
routes.get('/local', controller.local)
routes.get('/login', controller.login)
routes.get('/noticias', controller.noticias)
routes.get('/organizacao', controller.organizacao)
routes.get('/programacao', controller.programacao)
routes.get('/sobre', controller.sobre)
routes.get('/inscricao', controller.inscricao)

module.exports = routes