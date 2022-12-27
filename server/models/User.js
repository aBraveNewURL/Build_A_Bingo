const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const listSchema = require('./BingoList');

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Your password must be 6 or more characters!"],
    },
    friends: [userSchema],
    favorites: [listSchema],
  });

  // hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
  
  const User = model('User', userSchema);

  module.exports = User;