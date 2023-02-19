module.exports = function (req, res, next) {
  console.log(req.session)
    if (req.isAuthenticated()&&req.user.admin) {
      return next();
    }
    res.redirect("/inscricao");
  };