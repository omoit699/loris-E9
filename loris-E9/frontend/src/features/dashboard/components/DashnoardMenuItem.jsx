import { NavLink } from "react-router-dom";

export default function DashboardMenuItem({

    icon: Icon,

    label,

    to,

    badge,

    onClick

}) {

    return (

        <NavLink

            to={to}

            onClick={onClick}

            className={({ isActive }) => `

                flex

                items-center

                justify-between

                rounded-xl

                px-4

                py-3

                transition-all

                duration-300

                ${
                    isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-700 hover:bg-slate-100"
                }

            `}

        >

            <div className="flex items-center gap-3">

                {Icon && <Icon size={20} />}

                <span>

                    {label}

                </span>

            </div>

            {badge && (

                <span

                    className="
                        rounded-full
                        bg-orange-500
                        text-white
                        px-2
                        py-1
                        text-xs
                    "

                >

                    {badge}

                </span>

            )}

        </NavLink>

    );

}