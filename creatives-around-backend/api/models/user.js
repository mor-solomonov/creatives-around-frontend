const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  birthday: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  artForms: {
    type: [String],
  },
  gallery: {
    type: [String],
  },
  bio: {
    type: String,
  },
  lookingFor: {
    type: String,
  },
  lookingForArtForms: {
    type: [String],
  },
  linkDescription: {
    type: String,
  },
  linkURL: {
    type: [String],
  },
  events: {
    type: [
      {
        name: String,
        date: Number,
      },
    ],
  },
});

module.exports = mongoose.model('User', userSchema);
