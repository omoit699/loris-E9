import Product from "../models/Product.js";

class InventoryService {

    /**
     * 🔍 CHECK STOCK BEFORE ORDER
     */
    async validateStock(productId, quantity) {

        const product = await Product.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        if (product.quantity < quantity) {
            throw new Error(
                `Insufficient stock for ${product.name}`
            );
        }

        return product;
    }

    /**
     * 📉 REDUCE STOCK AFTER ORDER
     */
    async reduceStock(productId, quantity) {

        const product = await Product.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        product.quantity -= quantity;

        await product.save();

        return product;
    }

    /**
     * 📈 RESTORE STOCK (CANCEL ORDER)
     */
    async restoreStock(productId, quantity) {

        const product = await Product.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        product.quantity += quantity;

        await product.save();

        return product;
    }
}

export default new InventoryService();