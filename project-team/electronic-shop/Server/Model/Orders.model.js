const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true },
        billId: { type: mongoose.Schema.Types.ObjectId, required: true },
        status: {
            type: String,
            enum: ["pending", "active", "inactive", "banned"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;