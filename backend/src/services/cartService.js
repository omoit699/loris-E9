import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

class CartService {

    /**
     * 🛒 GET OR CREATE CART
     */
    async getUserCart(userId) {

        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = await Cart.create({
                user: userId,
                items: []
            });
        }

        return cart;
    }

    /**
     * ➕ ADD ITEM TO CART
     */
    async addToCart(userId, productId, quantity = 1) {

        const cart = await this.getUserCart(userId);

        const product = await Product.findById(productId);

        if (!product) {
            throw new Error("Product not found");
        }

        const existingItem = cart.items.find(
            item => item.product.toString() === productId
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                product: productId,
                quantity,
                priceAtTime: product.finalPrice
            });
        }

        await cart.save();

        return cart;
    }

    /**
     * ❌ CLEAR CART
     */
    async clearCart(userId) {

        const cart = await this.getUserCart(userId);

        cart.items = [];

        await cart.save();

        return cart;
    }
}

export default new CartService();