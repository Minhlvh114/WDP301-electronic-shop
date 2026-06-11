const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    variant_name: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      default: null,
    },
    storage: {
      type: String,
      default: null,
    },
    ram: {
      type: String,
      default: null,
    },
    attributes_json: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    images: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    sale_price: {
      type: Number,
      default: 0,
      min: 0,
    },
    stock_quantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    reserved_quantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

productVariantSchema.index({ product_id: 1 });

module.exports = mongoose.model('ProductVariant', productVariantSchema);