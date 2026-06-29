class PaymentService {

    /**
     * 💰 INITIATE PAYMENT (ABSTRACT)
     */
    async initiatePayment(order, method) {

        switch (method) {

            case "mtn_momo":
                return this.initiateMTN(order);

            case "airtel_money":
                return this.initiateAirtel(order);

            default:
                throw new Error("Unsupported payment method");
        }
    }

    /**
     * 📱 MTN MOMO (STRUCTURE ONLY)
     */
    async initiateMTN(order) {

        // In real integration: call MTN API
        return {
            provider: "mtn_momo",
            status: "pending",
            reference: `MTN-${Date.now()}`,
            amount: order.totalPrice
        };
    }

    /**
     * 📱 AIRTEL MONEY (STRUCTURE ONLY)
     */
    async initiateAirtel(order) {

        // In real integration: call Airtel API
        return {
            provider: "airtel_money",
            status: "pending",
            reference: `AIRTEL-${Date.now()}`,
            amount: order.totalPrice
        };
    }

    /**
     * ✅ VERIFY PAYMENT
     */
    async verifyPayment(reference) {

        // placeholder for webhook verification
        return {
            reference,
            status: "paid"
        };
    }
}

export default new PaymentService();