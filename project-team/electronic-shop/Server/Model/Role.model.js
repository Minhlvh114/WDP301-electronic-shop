const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
    {
        name: {
            type: String, required: true, trim: true,
        },
        status: {
            type: String,
            enum: ["pending", "active", "inactive", "banned"],
            default: "pending",
        },

    },
    { timestamps: true }
);

const Roles = mongoose.model('Roles', roleSchema)

module.exports = Roles;