const router = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/login', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Something is not right',
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // GENERATING TOKEN AND SENDING IT TO USER
      const token = jwt.sign(user.id, process.env.JWT_SECRET);
      return res.json({ user, token });
    });
  })(req, res);
});

router.post('/register', async (req, res, next) => {
  try {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    // BODY NEEDS TO HAVE ALL FIELDS REQUIRED IN USER MODEL
    await User.create(user);
    res.send('User successfuly created.');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
