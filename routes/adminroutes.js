const express = require('express');
const routes = express.Router();
const autenticacao = require('../config/autenticacao'); 
const autenticacaoadmin = require('../config/autenticacao'); 
const admincontroller = require('../controller/admincontroller')

routes.get('/login', autenticacao, admincontroller.login)
routes.get('/logout', autenticacao, admincontroller.logout)

routes.get('/adicionafotos', autenticacaoadmin, admincontroller.adicionafotos)
routes.post('/adicionafotos', autenticacaoadmin, admincontroller.adicionafotos1)
routes.get('/listafotos', autenticacaoadmin, admincontroller.listafotos)
routes.get('/deletarfotos/:id', autenticacaoadmin, admincontroller.deletafotos)


routes.get('/adicionanoticias', autenticacaoadmin, admincontroller.adicionanoticias)
routes.post('/adicionanoticias', autenticacaoadmin, admincontroller.adicionanoticias1)
routes.get('/listanoticias', autenticacaoadmin, admincontroller.listanoticias)
routes.get('/deletanoticias/:id', autenticacaoadmin, admincontroller.deletanoticias)


routes.get('/adicionaoficinas', autenticacaoadmin, admincontroller.adicionaoficinas)
routes.post('/adicionaoficinas', autenticacaoadmin, admincontroller.adicionaoficinas1)
routes.get('/listaoficinas', autenticacaoadmin, admincontroller.listaoficinas)
routes.get('/deletaoficinas/:id', autenticacaoadmin, admincontroller.deletaoficinas)
routes.get('/listarinscritos/:id', autenticacaoadmin, admincontroller.listainscritos)


routes.get('/listaevento', autenticacaoadmin, admincontroller.listaevento)
routes.post('/adicionaevento', autenticacaoadmin, admincontroller.adicionaevento1)
routes.get('/adicionaevento', autenticacaoadmin, admincontroller.adicionaevento)
routes.get('/deletaevento/:id', autenticacaoadmin, admincontroller.deletaevento)
routes.get('/listarinscritosevento/:id', autenticacaoadmin, admincontroller.listainscritosevento)

routes.get('/certificados', autenticacaoadmin, admincontroller.certificados)
routes.get('/oficinas', autenticacao, admincontroller.oficinas)
routes.post('/oficinas', autenticacao, admincontroller.inscreveroficina)
routes.get('/evento', autenticacao, admincontroller.evento)
routes.post('/evento', autenticacao, admincontroller.inscrever)



module.exports = routes