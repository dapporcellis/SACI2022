const express = require('express');
const app = express();
const port = 3000 || process.env.PORT
const path = require('path')

const routes = require('./routes/routes')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended:true }));

app.use(routes)

app.listen(port);