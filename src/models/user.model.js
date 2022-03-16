import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  uuid: String,
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('users', UserSchema);
