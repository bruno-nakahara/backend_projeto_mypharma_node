import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  uuid: String,
  name: {
    type: String,
    text: true,
  },
  description: {
    type: String,
    text: true,
  },
});

module.exports = mongoose.model('categories', CategorySchema);
