import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    contactPerson: String,

    phone: String,

    email: String,

    address: String,

    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],

    rating: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

export default mongoose.model("Supplier", supplierSchema);