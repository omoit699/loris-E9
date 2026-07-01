import { Link, useNavigate } from "react-router-dom";
import {
    FiHelpCircle,
    FiInfo,
    FiLogOut,
    FiShield
} from "react-icons/fi";

import company from "../../../constants/company";

export default function DashboardFooter({

    collapsed = false,

    onLogout

}) {

    const navigate = useNavigate();

    const currentYear = new Date().getFullYear();

    const handleLogout = () => {

        if (onLogout) {

            onLogout();

            return;

        }

        navigate("/login");

    };

    return (

        <footer
            className="
                border-t
                border-slate-200
                bg-white
                px-4
                py-4
            "
        >

            <div className="space-y-2">

                <Link

                    to="/support"

                    className="
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2
                        text-slate-600
                        transition
                        hover:bg-slate-100
                        hover:text-blue-600
                    "

                >

                    <FiHelpCircle size={18} />

                    {!collapsed && (

                        <span>

                            Support Center

                        </span>

                    )}

                </Link>

                <Link

                    to="/about"

                    className="
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2
                        text-slate-600
                        transition
                        hover:bg-slate-100
                        hover:text-blue-600
                    "

                >

                    <FiInfo size={18} />

                    {!collapsed && (

                        <span>

                            About Loris E9

                        </span>

                    )}

                </Link>

                <button

                    onClick={handleLogout}

                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2
                        text-red-600
                        transition
                        hover:bg-red-50
                    "

                >

                    <FiLogOut size={18} />

                    {!collapsed && (

                        <span>

                            Logout

                        </span>

                    )}

                </button>

            </div>

            {!collapsed && (

                <div
                    className="
                        mt-6
                        border-t
                        border-slate-200
                        pt-4
                        text-xs
                        text-slate-500
                    "
                >

                    <div className="flex items-center gap-2">

                        <FiShield size={14} />

                        <span>

                            Secure Dashboard

                        </span>

                    </div>

                    <p className="mt-2">

                        {company.name} v1.0.0

                    </p>

                    <p>

                        © {currentYear} {company.name}

                    </p>

                    <p>

                        {company.slogan}

                    </p>

                </div>

            )}

        </footer>

    );

}
