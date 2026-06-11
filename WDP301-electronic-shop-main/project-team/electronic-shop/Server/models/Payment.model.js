const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      default: null,
    },
    payment_method: {
      type: String,
      enum: ['cod', 'bank_transfer', 'momo', 'vnpay', 'card', 'payos'],
      required: true,
      default: 'payos',
    },
    payment_status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending',
    },
    transaction_code: {
      type: String,
      default: null,
      trim: true,
    },
    gateway_name: {
      type: String,
      default: null,
    },
    paid_amount: {
      type: Number,
      default: 0,
      min: 0,
    },
    paid_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

paymentSchema.index({ order_id: 1 });

module.exports = mongoose.model('Payment', paymentSchema);