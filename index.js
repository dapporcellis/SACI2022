const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
var session = require('express-session');
var flash = require('req-flash');
const passport = require("passport");
var moment = require('moment');
const {
    CyclicSessionStore
} = require("@cyclic.sh/session-store");
app.locals.moment = moment;

const options = {
    table: {
        name: process.env.CYCLIC_DB,
    }
};

app.use(
    session({
        store: new CyclicSessionStore(options),
        secret: "keyboard cat",
        //resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.authenticate('session'));

require('dotenv').config()

require('./config/conexao')

const routes = require('./routes/routes')
const adminroutes = require('./routes/adminroutes')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(routes)
app.use(adminroutes)

app.listen(port, function () {
    console.log('listening on port')
})