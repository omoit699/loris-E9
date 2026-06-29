import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
    },

    priceAtTime: {
        type: Number,
        required: true
    }
},
{ _id: false }
);

const cartSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    items: [cartItemSchema],

    totalItems: {
        type: Number,
        default: 0
    },

    totalPrice: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

/**
 * 🔥 RECALCULATE CART TOTALS
 */
cartSchema.methods.calculateTotals = function () {
    this.totalItems = this.items.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    this.totalPrice = this.items.reduce(
        (sum, item) => sum + item.quantity * item.priceAtTime,
        0
    );
};

/**
 * 💾 PRE-SAVE HOOK
 */
cartSchema.pre("save", function (next) {
    this.calculateTotals();
    next();
});

export default mongoose.model("Cart", cartSchema);