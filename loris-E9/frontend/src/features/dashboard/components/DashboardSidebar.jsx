import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    FiMenu,
    FiChevronLeft,
    FiChevronRight,
    FiLogOut,
    FiUser
} from "react-icons/fi";

import DashboardMenuItem from "./DashboardMenuItem";
import company from "../../../constants/company";

export default function DashboardSidebar({

    user,

    menu = [],

    mobileOpen,

    setMobileOpen

}) {

    const navigate = useNavigate();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {

        setCollapsed(prev => !prev);

    };

    const handleLogout = () => {

        // TODO:
        // Dispatch logout action here

        navigate("/login");

    };

    return (

        <>

            {/* Mobile Overlay */}

            {mobileOpen && (

                <div

                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                        lg:hidden
                    "

                    onClick={() => setMobileOpen(false)}

                />

            )}

            {/* Sidebar */}

            <aside

                className={`
                    fixed
                    lg:sticky
                    top-0
                    left-0
                    h-screen
                    bg-white
                    border-r
                    shadow-sm
                    transition-all
                    duration-300
                    ease-in-out
                    z-50
                    ${collapsed ? "w-20" : "w-72"}
                    ${
                        mobileOpen
                            ? "translate-x-0"
                            : "-translate-x-full lg:translate-x-0"
                    }
                `}

            >

                {/* Logo */}

                <div

                    className="
                        flex
                        items-center
                        justify-between
                        h-20
                        border-b
                        px-5
                    "

                >

                    <Link

                        to="/"

                        className="flex items-center gap-3"

                    >

                        <img

                            src={company.logo}

                            alt={company.name}

                            className="h-11 w-auto"

                        />

                        {!collapsed && (

                            <div>

                                <h2 className="font-bold text-blue-700">

                                    {company.name}

                                </h2>

                                <small className="text-slate-500">

                                    Business Portal

                                </small>

                            </div>

                        )}

                    </Link>

                    <button

                        onClick={toggleCollapse}

                        className="
                            hidden
                            lg:flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-lg
                            hover:bg-slate-100
                            transition
                        "

                    >

                        {

                            collapsed

                                ? <FiChevronRight size={18} />

                                : <FiChevronLeft size={18} />

                        }

                    </button>

                </div>

                {/* User */}

                <div

                    className="
                        border-b
                        p-5
                    "

                >

                    <div className="flex items-center gap-3">

                        <div

                            className="
                                h-12
                                w-12
                                rounded-full
                                bg-blue-100
                                flex
                                items-center
                                justify-center
                            "

                        >

                            <FiUser size={22} />

                        </div>

                        {

                            !collapsed && (

                                <div>

                                    <h3 className="font-semibold">

                                        {user?.name}

                                    </h3>

                                    <p className="text-sm text-slate-500">

                                        {user?.role}

                                    </p>

                                </div>

                            )

                        }

                    </div>

                </div>

                {/* Navigation */}

                <nav

                    className="
                        flex-1
                        overflow-y-auto
                        px-4
                        py-6
                    "

                >

                    <div className="space-y-2">

                        {

                            menu.map(item => (

                                <DashboardMenuItem

                                    key={item.path}

                                    icon={item.icon}

                                    label={collapsed ? "" : item.label}

                                    to={item.path}

                                    badge={item.badge}

                                />

                            ))

                        }

                    </div>

                </nav>

                {/* Footer */}

                <div

                    className="
                        border-t
                        p-4
                    "

                >

                    <button

                        onClick={handleLogout}

                        className="
                            flex
                            w-full
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3
                            text-red-600
                            transition
                            hover:bg-red-50
                        "

                    >

                        <FiLogOut size={20} />

                        {

                            !collapsed && (

                                <span>

                                    Logout

                                </span>

                            )

                        }

                    </button>

                </div>

            </aside>

            {/* Mobile Button */}

            <button

                onClick={() => setMobileOpen(true)}

                className="
                    fixed
                    top-5
                    left-5
                    z-30
                    rounded-xl
                    bg-white
                    p-3
                    shadow-lg
                    lg:hidden
                "

            >

                <FiMenu size={22} />

            </button>

        </>

    );

}