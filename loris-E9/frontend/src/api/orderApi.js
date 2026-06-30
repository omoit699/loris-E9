import api from "./axios";

/**
 * 📦 CREATE ORDER
 */
export const createOrder = (data) =>
    api.post("/orders", data);

/**
 * 📜 GET USER ORDERS
 */
export const getOrders = () =>
    api.get("/orders");