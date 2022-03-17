import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  uuid: String,
  name: {
    type: String,
    text: true,
  },
  description: {
    type: String,
    text: true,
  },
  price: {
    type: String,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
    text: true,
  },
  brand: {
    type: String,
    text: true,
  },
});

module.exports = mongoose.model('products', ProductSchema);
