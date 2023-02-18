const express = require('express');
const routes = express.Router();
const autenticacao = require('../config/autenticacao'); 
const autenticacaoadmin = require('../config/autenticacao'); 
const admincontroller = require('../controller/admincontroller')

routes.get('/login', autenticacao, admincontroller.login)
routes.get('/logout', autenticacao, admincontroller.logout)
routes.get('/adicionafotos', autenticacaoadmin, admincontroller.adicionafotos)
routes.get('/listafotos', autenticacaoadmin, admincontroller.listafotos)
routes.get('/adicionanoticias', autenticacaoadmin, admincontroller.adicionanoticias)
routes.get('/listanoticias', autenticacaoadmin, admincontroller.listanoticias)
routes.get('/adicionaoficinas', autenticacaoadmin, admincontroller.adicionaoficinas)
routes.get('/listaoficinas', autenticacaoadmin, admincontroller.listaoficinas)
routes.get('/listaevento', autenticacaoadmin, admincontroller.listaevento)
routes.get('/adicionaevento', autenticacaoadmin, admincontroller.adicionaevento)
routes.get('/certificados', autenticacaoadmin, admincontroller.certificados)
routes.get('/oficinas', autenticacao, admincontroller.oficinas)
routes.get('/evento', autenticacao, admincontroller.evento)

module.exports = routes