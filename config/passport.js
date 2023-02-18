const Usuario = require('../model/usuario')
const passport = require("passport");
var LocalStrategy = require("passport-local");
var bcrypt = require('bcrypt')

passport.use(
  new LocalStrategy({
    passReqToCallback: true
  }, async function (req, username, password, cb) {
    var user = await Usuario.findOne({
      email: username
    })
    if (!user) {
      return cb(null, false, req.flash('msg', 'Usuário não encontrado.'));
    } else {
      if (!await bcrypt.compareSync(password, user.senha)) {
        return cb(null, false, req.flash('msg', 'Senha inválida.'));
      } else {
        return cb(null, user);
      }
    }
  })
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, {
      id: user.id,
      email: user.email,
      nome: user.nome,
      admin: user.admin,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;