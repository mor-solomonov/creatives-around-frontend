const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');
// LOGIN
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async function (email, password, cb) {
      console.log(email, password);
      try {
        // CHECK IF EMAIL EXISTS IN DB
        const user = await User.findOne({ email });
        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        // CHECK IF PASSWORD IS CORRECT
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user, { message: 'Logged In Successfully' });
      } catch (error) {
        cb(error);
      }
    }
  )
);

// JWT
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async function (jwtPayload, cb) {
      try {
        const user = await User.findById(jwtPayload);
        console.log('User', user);
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
  // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
