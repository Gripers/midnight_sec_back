const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    category: String,
    sub_category: String,
    description: String,
    price: Number,
    kvt: Number,
    litr: Number,
    climb: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
