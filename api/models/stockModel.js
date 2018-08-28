
const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const PurchaseAndSalesSchema = new Schema({
  id: Number,
  quantity: {
    type: Number,
    default: 0,
  },
  pricePerKg: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const VegetableSchema = new Schema({
  id: Number,
  name: String,
  date: {
    type: Date,
    default: Date.now,
  },
  purchase: [PurchaseAndSalesSchema],
  sales: [PurchaseAndSalesSchema],
});

const VegetablesSchema = new Schema({
  vegetables: [VegetableSchema],
});

module.exports = mongoose.model('Vegetables', VegetablesSchema);
