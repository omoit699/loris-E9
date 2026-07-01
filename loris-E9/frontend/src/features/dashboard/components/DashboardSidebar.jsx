import DashboardLogo from "./DashboardLogo";
import DashboardProfile from "./DashboardProfile";
import DashboardNavItem from "./DashboardNavItem";
import DashboardFooter from "./DashboardFooter";

import useSidebar from "../hooks/useSidebar";

export default function DashboardSidebar({

    user,

    navigation = [],

    onLogout

}) {

    const {

        collapsed,

        mobileOpen,

        toggleCollapse,

        closeMobileSidebar

    } = useSidebar();

    return (

        <>

            {/* Mobile Overlay */}

            {mobileOpen && (

                <div

                    className="
                        fixed
                        inset-0
                        z-40
                        bg-black/50
                        lg:hidden
                    "

                    onClick={closeMobileSidebar}

                />

            )}

            {/* Sidebar */}

            <aside

                className={`

                    fixed

                    top-0

                    left-0

                    z-50

                    flex

                    h-screen

                    flex-col

                    border-r

                    border-slate-200

                    bg-white

                    shadow-xl

                    transition-all

                    duration-300

                    ease-in-out

                    ${collapsed ? "w-20" : "w-72"}

                    ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"}

                `}

            >

                {/* Logo */}

                <DashboardLogo

                    collapsed={collapsed}

                    onToggleCollapse={toggleCollapse}

                />

                {/* User */}

                <DashboardProfile

                    user={user}

                    collapsed={collapsed}

                />

                {/* Navigation */}

                <nav

                    className="
                        flex-1
                        overflow-y-auto
                        px-3
                        py-4
                    "

                >

                    <div className="space-y-2">

                        {

                            navigation.map(item => (

                                <DashboardNavItem

                                    key={item.path}

                                    icon={item.icon}

                                    label={item.label}

                                    to={item.path}

                                    badge={item.badge}

                                    collapsed={collapsed}

                                    disabled={item.disabled}

                                />

                            ))

                        }

                    </div>

                </nav>

                {/* Footer */}

                <DashboardFooter

                    collapsed={collapsed}

                    onLogout={onLogout}

                />

            </aside>

        </>

    );

}
