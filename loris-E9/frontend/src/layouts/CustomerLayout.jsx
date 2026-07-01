import { Navigate, Outlet } from "react-router-dom";

import DashboardSidebar from "../features/dashboard/components/DashboardSidebar";
import DashboardTopbar from "../features/dashboard/components/DashboardTopbar";
import PageLoader from "../components/common/feedback/PageLoader";

import customerNavigation from "../features/dashboard/navigation/customerNavigation";

/*
|--------------------------------------------------------------------------
| Temporary Authentication Hook
|--------------------------------------------------------------------------
| Replace this with your Auth Context / Redux / Zustand later.
|--------------------------------------------------------------------------
*/

const useAuth = () => {

    return {

        loading: false,

        isAuthenticated: true,

        user: {

            id: 1001,

            name: "Lawrence Omoit",

            email: "lawrenceomoit66@gmail.com",

            role: "Customer",

            avatar: ""

        }

    };

};

export default function CustomerLayout() {

    const {

        loading,

        isAuthenticated,

        user

    } = useAuth();

    const handleLogout = () => {

        console.log("Logging out...");

    };

    if (loading) {

        return <PageLoader />;

    }

    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;

    }

    return (

        <div className="flex min-h-screen bg-slate-100">

            <DashboardSidebar

                user={user}

                navigation={customerNavigation}

                onLogout={handleLogout}

            />

            <div className="flex flex-1 flex-col lg:ml-72">

                <DashboardTopbar

                    user={user}

                />

                <main

                    className="
                        flex-1
                        overflow-y-auto
                        p-6
                    "

                >

                    <Outlet />

                </main>

            </div>

        </div>

    );

}
