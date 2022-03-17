import mongoose from 'mongoose';

const BrandSchema = new mongoose.Schema({
  uuid: String,
  name: {
    type: String,
    text: true,
  },
});

module.exports = mongoose.model('brands', BrandSchema);
