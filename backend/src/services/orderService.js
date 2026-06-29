import Order from "../models/Order.js";
import inventoryService from "./inventoryService.js";
import cartService from "./cartService.js";

class OrderService {

    /**
     * 🚀 CREATE ORDER FROM CART
     */
    async createOrderFromCart(userId, shippingAddress) {

        const cart = await cartService.getUserCart(userId);

        if (!cart.items.length) {
            throw new Error("Cart is empty");
        }

        let itemsPrice = 0;

        const orderItems = [];

        /**
         * 🔍 VALIDATE + BUILD ORDER ITEMS
         */
        for (const item of cart.items) {

            const product = await inventoryService.validateStock(
                item.product,
                item.quantity
            );

            const total = item.quantity * item.priceAtTime;

            itemsPrice += total;

            orderItems.push({
                product: product._id,
                name: product.name,
                price: item.priceAtTime,
                quantity: item.quantity,
                total
            });

        }

        const deliveryFee = itemsPrice > 100000 ? 0 : 5000;

        const totalPrice = itemsPrice + deliveryFee;

        /**
         * 📦 CREATE ORDER
         */
        const order = await Order.create({
            user: userId,
            items: orderItems,
            shippingAddress,
            itemsPrice,
            deliveryFee,
            totalPrice
        });

        /**
         * 📉 REDUCE STOCK AFTER ORDER
         */
        for (const item of cart.items) {
            await inventoryService.reduceStock(
                item.product,
                item.quantity
            );
        }

        /**
         * 🧹 CLEAR CART
         */
        await cartService.clearCart(userId);

        return order;
    }

    /**
     * 📦 GET USER ORDERS
     */
    async getUserOrders(userId) {

        return Order.find({ user: userId })
            .sort({ createdAt: -1 });
    }

    /**
     * 🔍 GET SINGLE ORDER
     */
    async getOrderById(orderId) {

        return Order.findById(orderId)
            .populate("user", "firstName lastName email");
    }
}

export default new OrderService();