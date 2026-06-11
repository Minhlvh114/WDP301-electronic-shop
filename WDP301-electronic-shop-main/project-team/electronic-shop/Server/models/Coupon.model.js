const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: null,
    },
    discount_type: {
      type: String,
      enum: ['percent', 'fixed'],
      required: true,
    },
    discount_value: {
      type: Number,
      default: 0,
      min: 0,
    },
    max_discount: {
      type: Number,
      default: 0,
      min: 0,
    },
    min_order_amount: {
      type: Number,
      default: 0,
      min: 0,
    },
    usage_limit: {
      type: Number,
      default: null,
      min: 0,
    },
    used_count: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', couponSchema);