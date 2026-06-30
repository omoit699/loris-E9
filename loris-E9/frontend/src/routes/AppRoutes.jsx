import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import CustomerLayout from "../layouts/CustomerLayout";

// Public Pages
import HomePage from "../pages/public/HomePage";
import ProductsPage from "../pages/public/ProductsPage";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import CategoriesPage from "../pages/public/CategoriesPage";
import CategoryProductsPage from "../pages/public/CategoryProductsPage";
import BrandsPage from "../pages/public/BrandsPage";
import OffersPage from "../pages/public/OffersPage";
import AboutPage from "../pages/public/AboutPage";
import ContactPage from "../pages/public/ContactPage";
import SearchResultsPage from "../pages/public/SearchResultsPage";

// Authentication
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";

// Customer Pages
import CustomerDashboardPage from "../pages/customer/DashboardPage";
import ProfilePage from "../pages/customer/ProfilePage";
import OrdersPage from "../pages/customer/OrdersPage";
import WishlistPage from "../pages/customer/WishlistPage";
import CartPage from "../pages/customer/CartPage";
import CheckoutPage from "../pages/customer/CheckoutPage";
import AddressesPage from "../pages/customer/AddressesPage";

// Admin Pages
import AdminDashboardPage from "../pages/admin/DashboardPage";
import AdminProductsPage from "../pages/admin/ProductsPage";
import AdminCategoriesPage from "../pages/admin/CategoriesPage";
import AdminOrdersPage from "../pages/admin/OrdersPage";
import AdminCustomersPage from "../pages/admin/CustomersPage";
import AdminSuppliersPage from "../pages/admin/SuppliersPage";
import AdminAnalyticsPage from "../pages/admin/AnalyticsPage";
import AdminSettingsPage from "../pages/admin/SettingsPage";

// Error Pages
import NotFoundPage from "../pages/errors/NotFoundPage";

export default function AppRoutes() {

    return (

        <Routes>

            {/* ===========================
                PUBLIC ROUTES
            ============================ */}

            <Route element={<MainLayout />}>

                <Route index element={<HomePage />} />

                <Route path="products" element={<ProductsPage />} />

                <Route
                    path="products/:slug"
                    element={<ProductDetailsPage />}
                />

                <Route
                    path="categories"
                    element={<CategoriesPage />}
                />

                <Route
                    path="category/:slug"
                    element={<CategoryProductsPage />}
                />

                <Route
                    path="brands"
                    element={<BrandsPage />}
                />

                <Route
                    path="offers"
                    element={<OffersPage />}
                />

                <Route
                    path="about"
                    element={<AboutPage />}
                />

                <Route
                    path="contact"
                    element={<ContactPage />}
                />

                <Route
                    path="search"
                    element={<SearchResultsPage />}
                />

            </Route>

            {/* ===========================
                AUTH ROUTES
            ============================ */}

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route
                path="/forgot-password"
                element={<ForgotPasswordPage />}
            />

            <Route
                path="/reset-password/:token"
                element={<ResetPasswordPage />}
            />

            {/* ===========================
                CUSTOMER ROUTES
            ============================ */}

            <Route element={<CustomerLayout />}>

                <Route
                    path="/dashboard"
                    element={<CustomerDashboardPage />}
                />

                <Route
                    path="/profile"
                    element={<ProfilePage />}
                />

                <Route
                    path="/orders"
                    element={<OrdersPage />}
                />

                <Route
                    path="/wishlist"
                    element={<WishlistPage />}
                />

                <Route
                    path="/cart"
                    element={<CartPage />}
                />

                <Route
                    path="/checkout"
                    element={<CheckoutPage />}
                />

                <Route
                    path="/addresses"
                    element={<AddressesPage />}
                />

            </Route>

            {/* ===========================
                ADMIN ROUTES
            ============================ */}

            <Route element={<AdminLayout />}>

                <Route
                    path="/admin"
                    element={<AdminDashboardPage />}
                />

                <Route
                    path="/admin/products"
                    element={<AdminProductsPage />}
                />

                <Route
                    path="/admin/categories"
                    element={<AdminCategoriesPage />}
                />

                <Route
                    path="/admin/orders"
                    element={<AdminOrdersPage />}
                />

                <Route
                    path="/admin/customers"
                    element={<AdminCustomersPage />}
                />

                <Route
                    path="/admin/suppliers"
                    element={<AdminSuppliersPage />}
                />

                <Route
                    path="/admin/analytics"
                    element={<AdminAnalyticsPage />}
                />

                <Route
                    path="/admin/settings"
                    element={<AdminSettingsPage />}
                />

            </Route>

            {/* ===========================
                REDIRECTS
            ============================ */}

            <Route
                path="/home"
                element={<Navigate to="/" replace />}
            />

            {/* ===========================
                404
            ============================ */}

            <Route
                path="*"
                element={<NotFoundPage />}
            />

        </Routes>

    );

}