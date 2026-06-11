const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    brand_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: null,
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
    total_reserved: {
      type: Number,
      default: 0,
      min: 0,
    },
    average_rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    rating_count: {
      type: Number,
      default: 0,
      min: 0,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'out_of_stock', 'draft'],
      default: 'active',
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

productSchema.index({ name: 'text', sku: 'text' });
productSchema.index({ brand_id: 1 });
productSchema.index({ category_id: 1 });

module.exports = mongoose.model('Product', productSchema);