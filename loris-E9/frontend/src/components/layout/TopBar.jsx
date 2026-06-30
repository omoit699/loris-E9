import { Link } from "react-router-dom";
import {
    FiHeart,
    FiShoppingCart,
    FiUser,
    FiBell,
    FiSearch
} from "react-icons/fi";

import SearchInput from "../ui/SearchInput";

export default function TopBar() {

    return (

        <header className="bg-white shadow-sm">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between gap-6 py-5">

                    {/* Logo */}

                    <Link
                        to="/"
                        className="flex items-center gap-3 flex-shrink-0"
                    >

                        <img
                            src="/logo.png"
                            alt="Loris E-9"
                            className="h-14 w-auto"
                        />

                        <div>

                            <h1 className="text-2xl font-bold text-blue-700">
                                Loris E-9
                            </h1>

                            <p className="text-sm text-slate-500">
                                Hardware & General Supplies
                            </p>

                        </div>

                    </Link>

                    {/* Search */}

                    <div className="hidden lg:block flex-1 max-w-2xl">

                        <SearchInput />

                    </div>

                    {/* Icons */}

                    <div className="flex items-center gap-6">

                        <Link
                            to="/wishlist"
                            className="relative hover:text-blue-600 transition"
                        >
                            <FiHeart size={24} />
                        </Link>

                        <Link
                            to="/notifications"
                            className="relative hover:text-blue-600 transition"
                        >
                            <FiBell size={24} />
                        </Link>

                        <Link
                            to="/cart"
                            className="relative hover:text-blue-600 transition"
                        >
                            <FiShoppingCart size={24} />

                            <span
                                className="
                                    absolute
                                    -top-2
                                    -right-2
                                    bg-orange-500
                                    text-white
                                    text-xs
                                    rounded-full
                                    w-5
                                    h-5
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                0
                            </span>

                        </Link>

                        <Link
                            to="/login"
                            className="
                                flex
                                items-center
                                gap-2
                                font-medium
                                hover:text-blue-600
                            "
                        >
                            <FiUser size={22} />

                            <span className="hidden md:block">
                                Account
                            </span>

                        </Link>

                    </div>

                </div>

                {/* Mobile Search */}

                <div className="lg:hidden pb-4">

                    <SearchInput />

                </div>

            </div>

        </header>

    );

}