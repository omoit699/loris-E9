import DashboardLogo from "./DashboardLogo";
import DashboardProfile from "./DashboardProfile";
import DashboardNavItem from "./DashboardNavItem";
import DashboardFooter from "./DashboardFooter";

export default function DashboardSidebar({
    user,
    navigation = [],
    collapsed,
    mobileOpen,
    toggleCollapse,
    closeMobileSidebar,
    onLogout
}) {
    return (
        <>
            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
                    onClick={closeMobileSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 z-50
                    flex h-screen flex-col
                    border-r border-slate-200
                    bg-white
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    ${collapsed ? "w-20" : "w-72"}
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >
                <DashboardLogo
                    collapsed={collapsed}
                    onToggleCollapse={toggleCollapse}
                />

                <DashboardProfile
                    user={user}
                    collapsed={collapsed}
                />

                <nav className="flex-1 overflow-y-auto px-3 py-5">
                    <div className="space-y-1">

                        {navigation.map((section) => (

                            <div key={section.title} className="mb-6">

                                {!collapsed && (
                                    <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        {section.title}
                                    </h3>
                                )}

                                <div className="space-y-1">

                                    {section.items.map((item) => (
                                        <DashboardNavItem
                                            key={item.path}
                                            icon={item.icon}
                                            label={item.label}
                                            to={item.path}
                                            badge={item.badge}
                                            disabled={item.disabled}
                                            collapsed={collapsed}
                                        />
                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>
                </nav>

                <DashboardFooter
                    collapsed={collapsed}
                    onLogout={onLogout}
                />
            </aside>
        </>
    );
}
