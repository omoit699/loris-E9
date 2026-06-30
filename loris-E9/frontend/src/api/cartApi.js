import api from "./axios";

/**
 * 🛒 GET USER CART
 */
export const getCart = () =>
    api.get("/cart");

/**
 * ➕ ADD TO CART
 */
export const addToCart = (data) =>
    api.post("/cart", data);

/**
 * ❌ REMOVE ITEM
 */
export const removeFromCart = (id) =>
    api.delete(`/cart/${id}`);