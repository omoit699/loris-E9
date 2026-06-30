import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import DashboardSidebar from "../features/dashboard/components/DashboardSidebar";
import DashboardTopbar from "../features/dashboard/components/DashboardTopbar";
import PageLoader from "../components/common/feedback/PageLoader";

import customerMenu from "../features/dashboard/constants/customerMenu";

// Temporary auth hook.
// Replace with your auth context or Redux/Zustand store.
const useAuth = () => ({
    loading: false,
    isAuthenticated: true,
    user: {
        id: 101,
        name: "Lawrence Omoit",
        email: "lawrence@example.com",
        role: "Customer"
    }
});

export default function CustomerLayout() {
    const { loading, isAuthenticated, user } = useAuth();

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    if (loading) return <PageLoader />;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-slate-100">

            <DashboardSidebar
                user={user}
                menu={customerMenu}
                mobileOpen={mobileSidebarOpen}
                setMobileOpen={setMobileSidebarOpen}
            />

            <div className="flex flex-1 flex-col">

                <DashboardTopbar
                    user={user}
                    onMenuClick={() => setMobileSidebarOpen(true)}
                />

                <main className="flex-1 overflow-x-auto p-6">

                    <Outlet />

                </main>

            </div>

        </div>
    );
}