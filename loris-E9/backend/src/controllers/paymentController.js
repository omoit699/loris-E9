import asyncHandler from "../middleware/asyncHandler.js";
import PaymentService from "../services/paymentService.js";
import Order from "../models/Order.js";

export const payForOrder = asyncHandler(async (req, res) => {

    const { orderId, method } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
        throw new Error("Order not found");
    }

    const payment = await PaymentService.initiatePayment(order, method);

    res.status(200).json({
        success: true,
        message: "Payment initiated",
        data: payment
    });
});