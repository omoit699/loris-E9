import mongoose from "mongoose";
import slugify from "slugify";
import paginate from "mongoose-paginate-v2";
import baseFields from "./BaseModel.js";

const productSchema = new mongoose.Schema(
{
    ...baseFields,

    name: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    slug: {
        type: String,
        unique: true,
        index: true
    },

    sku: {
        type: String,
        unique: true,
        index: true
    },

    description: {
        type: String,
        required: true
    },

    shortDescription: String,

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
        index: true
    },

    brand: {
        type: String,
        default: "Generic",
        index: true
    },

    unit: {
        type: String,
        enum: [
            "Piece",
            "Box",
            "Meter",
            "Roll",
            "Kg",
            "Litre",
            "Packet"
        ],
        default: "Piece"
    },

    price: {
        type: Number,
        required: true,
        index: true
    },

    discount: {
        type: Number,
        default: 0
    },

    finalPrice: {
        type: Number
    },

    quantity: {
        type: Number,
        default: 0,
        index: true
    },

    minimumStock: {
        type: Number,
        default: 5
    },

    images: [
        {
            url: String,
            publicId: String
        }
    ],

    featured: {
        type: Boolean,
        default: false,
        index: true
    },

    tags: [
        String
    ],

    averageRating: {
        type: Number,
        default: 0
    },

    reviewCount: {
        type: Number,
        default: 0
    },

    views: {
        type: Number,
        default: 0
    },

    salesCount: {
        type: Number,
        default: 0
    },

    isDeleted: {
        type: Boolean,
        default: false,
        index: true
    },

    deletedAt: Date
},
{
    timestamps: true
}
);

/**
 * 🔥 INDEXING FOR PERFORMANCE
 */
productSchema.index({ name: "text", description: "text", tags: "text" });

/**
 * 🧠 VIRTUAL: STOCK STATUS
 */
productSchema.virtual("stockStatus").get(function () {
    if (this.quantity <= 0) return "Out of Stock";
    if (this.quantity <= this.minimumStock) return "Low Stock";
    return "In Stock";
});

/**
 * 💰 PRE-SAVE: FINAL PRICE CALCULATION
 */
productSchema.pre("save", function (next) {
    if (this.discount > 0) {
        this.finalPrice = this.price - (this.price * this.discount) / 100;
    } else {
        this.finalPrice = this.price;
    }

    next();
});

/**
 * 🔗 PRE-SAVE: SLUG GENERATION
 */
productSchema.pre("save", function (next) {
    if (this.isModified("name")) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

/**
 * 📦 PAGINATION PLUGIN
 */
productSchema.plugin(paginate);

/**
 * 🚀 SOFT DELETE FILTER (GLOBAL QUERY)
 */
productSchema.pre(/^find/, function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});

/**
 * 📤 MODEL EXPORT
 */
export default mongoose.model("Product", productSchema);