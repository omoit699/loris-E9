import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    name: String,

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    }
},
{ _id: false });

export default orderItemSchema;