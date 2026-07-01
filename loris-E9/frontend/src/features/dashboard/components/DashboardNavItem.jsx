import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function DashboardNavItem({

    icon: Icon,

    label,

    to,

    badge,

    collapsed = false,

    disabled = false,

    children = null

}) {

    const baseClasses = `
        group
        flex
        items-center
        justify-between
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200
    `;

    return (

        <NavLink

            to={disabled ? "#" : to}

            end

            onClick={(event) => {

                if (disabled) {

                    event.preventDefault();

                }

            }}

            className={({ isActive }) => `

                ${baseClasses}

                ${
                    isActive
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                }

                ${
                    disabled
                        ? "cursor-not-allowed opacity-50"
                        : ""
                }

            `}

            title={collapsed ? label : ""}

        >

            {({ isActive }) => (

                <>

                    <div className="flex items-center gap-4">

                        {Icon && (

                            <Icon

                                size={20}

                                className={`
                                    transition-colors

                                    ${
                                        isActive
                                            ? "text-white"
                                            : "text-slate-500 group-hover:text-blue-600"
                                    }
                                `}

                            />

                        )}

                        {!collapsed && (

                            <span className="font-medium">

                                {label}

                            </span>

                        )}

                    </div>

                    {!collapsed && (

                        <div className="flex items-center gap-2">

                            {badge && (

                                <span
                                    className="
                                        rounded-full
                                        bg-orange-500
                                        px-2
                                        py-1
                                        text-xs
                                        font-semibold
                                        text-white
                                    "
                                >

                                    {badge}

                                </span>

                            )}

                            {children && (

                                <FiChevronRight
                                    size={16}
                                />

                            )}

                        </div>

                    )}

                </>

            )}

        </NavLink>

    );

}
