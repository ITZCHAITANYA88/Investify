const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    enum: ['BUY', 'SELL'],
    required: true,
  },
}, { timestamps: true });

module.exports.OrdersModel = mongoose.model('Order', OrdersSchema);
