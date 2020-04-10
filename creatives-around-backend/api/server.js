require('dotenv').config();
const express = require('express');
const authRoutes = require('../api/routes/auth');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Users = require('./models/user');
const upload = require('multer')();

const api = express();
// MIDDLEWARES
api.use(cors());
api.use(morgan('dev'));
api.use(upload.array());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(passport.initialize());
// DATABASE
mongoose.connect('mongodb://localhost:27017/creatives', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});
// PASSPORT
require('./passport');
// ROUTE
api.use('/auth', authRoutes);
api.get('/users', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const users = await Users.find().lean();
  res.status(200).json(users);
});

api.get('/', (req, res, next) => {
  res.send(`Home route`);
});

api.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

api.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({
    error: error,
  });
});

const port = process.env.PORT || 5000;
api.listen(port, () => console.log(`Listening on port ${port}`));
