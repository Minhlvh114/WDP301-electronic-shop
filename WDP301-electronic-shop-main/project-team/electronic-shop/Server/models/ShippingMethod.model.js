const mongoose = require('mongoose');

const shippingMethodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    base_fee: {
      type: Number,
      default: 0,
      min: 0,
    },
    estimated_days: {
      type: Number,
      required: true,
      min: 0,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ShippingMethod', shippingMethodSchema);