import api from "./axios";

/**
 * 📦 ADMIN: GET ALL PRODUCTS
 */
export const adminGetProducts = () =>
    api.get("/admin/products");

/**
 * 📦 ADMIN: GET ALL ORDERS
 */
export const adminGetOrders = () =>
    api.get("/admin/orders");