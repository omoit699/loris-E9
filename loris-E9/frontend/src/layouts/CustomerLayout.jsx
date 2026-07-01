import { Navigate, Outlet } from "react-router-dom";

import DashboardSidebar from "../features/dashboard/components/DashboardSidebar";
import DashboardTopbar from "../features/dashboard/components/DashboardTopbar";
import PageLoader from "../components/common/feedback/PageLoader";

import customerNavigation from "../features/dashboard/navigation/customerNavigation";
import useSidebar from "../features/dashboard/hooks/useSidebar";

const useAuth = () => ({
    loading: false,
    isAuthenticated: true,
    user: {
        id: 1001,
        name: "Lawrence Omoit",
        email: "lawrenceomoit66@gmail.com",
        role: "Customer",
        avatar: ""
    }
});

export default function CustomerLayout() {

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
                navigation={customerNavigation}
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
