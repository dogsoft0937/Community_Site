const { User } = require('../models/User');

const auth = (req, res, next) => {
  var token = req.cookies.auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user){
      return res.json({
        isAuth: false,
        error: true
      });
    }
    else{
    req.user = user;
    req.token = token;
    next();
    }
  });
};

module.exports = { auth };
