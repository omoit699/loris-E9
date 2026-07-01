import DashboardLogo from "./DashboardLogo";
import DashboardProfile from "./DashboardProfile";
import DashboardNavItem from "./DashboardNavItem";
import DashboardFooter from "./DashboardFooter";

export default function DashboardSidebar({

    user,

    navigation,

    collapsed,

    mobileOpen,

    toggleCollapse,

    closeMobileSidebar,

    onLogout

}) {

    return (

        <>

            {mobileOpen && (

                <div

                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "

                    onClick={closeMobileSidebar}

                />

            )}

            <aside

                className={`

                    fixed
                    top-0
                    left-0
                    z-50

                    flex
                    flex-col

                    h-screen

                    bg-white

                    border-r

                    shadow-lg

                    transition-all

                    duration-300

                    ease-in-out

                    ${collapsed ? "w-20" : "w-72"}

                    ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"}

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

                <DashboardFooter

                    collapsed={collapsed}

                    onLogout={onLogout}

                />

            </aside>

        </>

    );

}
