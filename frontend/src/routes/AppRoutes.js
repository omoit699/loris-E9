import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

// User Pages
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard";

// Route Protection
import ProtectedRoute from "./ProtectedRoute";

// Optional Layout Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Optional 404 Page
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                {/* ========================= */}
                {/* Public Routes */}
                {/* ========================= */}

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/products" element={<Products />} />

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />

                {/* ========================= */}
                {/* Protected User Routes */}
                {/* ========================= */}

                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute>
                            <Orders />
                        </ProtectedRoute>
                    }
                />

                {/* ========================= */}
                {/* Admin Routes */}
                {/* ========================= */}

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute requiredRole="admin">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />

                {/* ========================= */}
                {/* 404 */}
                {/* ========================= */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}