import { Navigate, Outlet } from "react-router-dom";

import DashboardSidebar from "../features/dashboard/components/DashboardSidebar";
import DashboardTopbar from "../features/dashboard/components/DashboardTopbar";
import PageLoader from "../components/common/feedback/PageLoader";

import adminNavigation from "../features/dashboard/navigation/adminNavigation";
import useSidebar from "../features/dashboard/hooks/useSidebar";

const useAuth = () => ({
    loading: false,
    isAuthenticated: true,
    user: {
        id: 1,
        name: "Administrator",
        email: "lawrenceomoit66@gmail.com",
        role: "Admin",
        avatar: ""
    }
});

export default function AdminLayout() {

    const {
        loading,
        isAuthenticated,
        user
    } = useAuth();

    const sidebar = useSidebar();

    if (loading) return <PageLoader />;

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-100">

            <DashboardSidebar
                user={user}
                navigation={adminNavigation}
                onLogout={() => console.log("Logout")}
                {...sidebar}
            />

            <div
                className="min-h-screen transition-all duration-300"
                style={{
                    marginLeft: sidebar.collapsed ? "5rem" : "18rem"
                }}
            >

                <DashboardTopbar
                    user={user}
                    {...sidebar}
                />

                <main className="p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}
