import mongoose from "mongoose";
import orderItemSchema from "./OrderItem.js";

const orderSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    items: [orderItemSchema],

    shippingAddress: {
        fullName: String,
        phone: String,
        region: String,
        city: String,
        street: String,
        details: String
    },

    paymentMethod: {
        type: String,
        enum: ["cash", "mtn_momo", "airtel_money"],
        default: "cash"
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    orderStatus: {
        type: String,
        enum: [
            "pending",
            "processing",
            "shipped",
            "delivered",
            "cancelled"
        ],
        default: "pending"
    },

    itemsPrice: {
        type: Number,
        required: true
    },

    deliveryFee: {
        type: Number,
        default: 0
    },

    totalPrice: {
        type: Number,
        required: true
    },

    isPaid: {
        type: Boolean,
        default: false
    },

    paidAt: Date,

    isDelivered: {
        type: Boolean,
        default: false
    },

    deliveredAt: Date,

    transactionId: String
},
{
    timestamps: true
});

/**
 * 🔥 ORDER INDEXES
 */
orderSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model("Order", orderSchema);