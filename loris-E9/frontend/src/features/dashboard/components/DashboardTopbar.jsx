import { useState } from "react";
import {
    FiBell,
    FiSearch,
    FiSettings,
    FiUser,
    FiChevronDown,
    FiMaximize,
    FiMoon
} from "react-icons/fi";

import company from "../../../constants/company";

export default function DashboardTopbar({

    user,

    onMenuClick

}) {

    const [search, setSearch] = useState("");

    return (

        <header
            className="
                sticky
                top-0
                z-30
                flex
                h-20
                items-center
                justify-between
                border-b
                bg-white
                px-6
                shadow-sm
            "
        >

            {/* Left Section */}

            <div className="flex items-center gap-4">

                <button

                    onClick={onMenuClick}

                    className="
                        rounded-lg
                        p-2
                        hover:bg-slate-100
                        lg:hidden
                    "

                >

                    ☰

                </button>

                <div>

                    <h1 className="text-2xl font-bold">

                        Dashboard

                    </h1>

                    <p className="text-sm text-slate-500">

                        Welcome to {company.name}

                    </p>

                </div>

            </div>

            {/* Search */}

            <div className="hidden xl:block w-full max-w-lg mx-8">

                <div className="relative">

                    <FiSearch

                        className="
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "

                    />

                    <input

                        type="text"

                        value={search}

                        onChange={(e) => setSearch(e.target.value)}

                        placeholder="Search products, orders, customers..."

                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            py-3
                            pl-11
                            pr-4
                            outline-none
                            focus:border-blue-500
                        "

                    />

                </div>

            </div>

            {/* Right Section */}

            <div className="flex items-center gap-4">

                <button

                    className="
                        rounded-xl
                        p-3
                        hover:bg-slate-100
                    "

                >

                    <FiMoon size={20} />

                </button>

                <button

                    className="
                        rounded-xl
                        p-3
                        hover:bg-slate-100
                    "

                >

                    <FiMaximize size={20} />

                </button>

                <button

                    className="
                        relative
                        rounded-xl
                        p-3
                        hover:bg-slate-100
                    "

                >

                    <FiBell size={20} />

                    <span
                        className="
                            absolute
                            top-2
                            right-2
                            h-2
                            w-2
                            rounded-full
                            bg-red-500
                        "
                    />

                </button>

                <button

                    className="
                        rounded-xl
                        p-3
                        hover:bg-slate-100
                    "

                >

                    <FiSettings size={20} />

                </button>

                <div

                    className="
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        border
                        px-3
                        py-2
                        cursor-pointer
                        hover:bg-slate-50
                    "

                >

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100
                        "
                    >

                        <FiUser />

                    </div>

                    <div className="hidden md:block">

                        <h3 className="font-semibold">

                            {user?.name || "Administrator"}

                        </h3>

                        <small className="text-slate-500">

                            {user?.role || "Admin"}

                        </small>

                    </div>

                    <FiChevronDown />

                </div>

            </div>

        </header>

    );

}