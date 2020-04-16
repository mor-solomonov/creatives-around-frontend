const router = require('express').Router();
const User = require('../models/user');
const passport = require('passport');

//localhost:5000/user
router.get('/', passport.authenticate('jwt'), function (req, res, next) {
  res.json(req.user);
});

//localhost:5000/user/all
router.get('/all', async (req, res, next) => {});

module.exports = router;
