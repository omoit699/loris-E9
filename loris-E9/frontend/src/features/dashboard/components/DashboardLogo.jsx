import { Link } from "react-router-dom";
import {
    FiChevronLeft,
    FiChevronRight
} from "react-icons/fi";

import company from "../../../constants/company";

export default function DashboardLogo({

    collapsed,

    onToggleCollapse

}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                h-20
                border-b
                border-slate-200
                px-5
                bg-white
            "
        >

            <Link
                to="/"
                className="flex items-center gap-3"
            >

                <img
                    src={company.logo}
                    alt={company.name}
                    className="
                        h-12
                        w-12
                        rounded-lg
                        object-contain
                    "
                />

                {!collapsed && (

                    <div
                        className="
                            transition-all
                            duration-300
                        "
                    >

                        <h2
                            className="
                                text-lg
                                font-bold
                                text-blue-700
                                leading-none
                            "
                        >
                            {company.name}
                        </h2>

                        <p
                            className="
                                text-xs
                                text-slate-500
                                mt-1
                            "
                        >
                            Business Management Portal
                        </p>

                    </div>

                )}

            </Link>

            <button
                type="button"
                onClick={onToggleCollapse}
                aria-label={
                    collapsed
                        ? "Expand sidebar"
                        : "Collapse sidebar"
                }
                className="
                    hidden
                    lg:flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    transition
                    hover:bg-slate-100
                "
            >

                {collapsed
                    ? <FiChevronRight size={18} />
                    : <FiChevronLeft size={18} />
                }

            </button>

        </div>

    );

}
