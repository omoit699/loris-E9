import api from "./axios";

/**
 * 📦 GET ALL PRODUCTS
 */
export const getProducts = () =>
    api.get("/products");

/**
 * 🔍 GET SINGLE PRODUCT
 */
export const getProductById = (id) =>
    api.get(`/products/${id}`);