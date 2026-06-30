import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    FiMenu,
    FiX,
    FiChevronDown
} from "react-icons/fi";

const categories = [
    {
        name: "Hardware",
        path: "/category/hardware"
    },
    {
        name: "Construction",
        path: "/category/construction"
    },
    {
        name: "Electrical",
        path: "/category/electrical"
    },
    {
        name: "Plumbing",
        path: "/category/plumbing"
    },
    {
        name: "Paint",
        path: "/category/paint"
    },
    {
        name: "Agriculture",
        path: "/category/agriculture"
    },
    {
        name: "Power Tools",
        path: "/category/power-tools"
    },
    {
        name: "Safety Equipment",
        path: "/category/safety"
    }
];

export default function Navbar() {

    const [mobileOpen, setMobileOpen] = useState(false);

    const [sticky, setSticky] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setSticky(window.scrollY > 40);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav
            className={`
                bg-white
                border-b
                border-slate-200
                z-50
                transition-all
                duration-300
                ${
                    sticky
                        ? "sticky top-0 shadow-lg"
                        : ""
                }
            `}
        >

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center h-16">

                    {/* Desktop Menu */}

                    <div className="hidden lg:flex items-center gap-8">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold"
                                    : "text-slate-700 hover:text-blue-600 transition"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold"
                                    : "text-slate-700 hover:text-blue-600 transition"
                            }
                        >
                            Products
                        </NavLink>

                        {/* Categories */}

                        <div className="group relative">

                            <button
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-slate-700
                                    hover:text-blue-600
                                    transition
                                "
                            >

                                Categories

                                <FiChevronDown />

                            </button>

                            <div
                                className="
                                    absolute
                                    left-0
                                    mt-4
                                    w-72
                                    rounded-xl
                                    bg-white
                                    shadow-xl
                                    border
                                    border-slate-200
                                    opacity-0
                                    invisible
                                    group-hover:opacity-100
                                    group-hover:visible
                                    transition-all
                                    duration-300
                                "
                            >

                                {categories.map(category => (

                                    <NavLink
                                        key={category.path}
                                        to={category.path}
                                        className="
                                            block
                                            px-5
                                            py-3
                                            hover:bg-slate-100
                                            transition
                                        "
                                    >

                                        {category.name}

                                    </NavLink>

                                ))}

                            </div>

                        </div>

                        <NavLink
                            to="/offers"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            Offers
                        </NavLink>

                        <NavLink
                            to="/brands"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            Brands
                        </NavLink>

                        <NavLink
                            to="/about"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className="text-slate-700 hover:text-blue-600"
                        >
                            Contact
                        </NavLink>

                    </div>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden"
                    >

                        {mobileOpen ? (

                            <FiX size={28} />

                        ) : (

                            <FiMenu size={28} />

                        )}

                    </button>

                </div>

            </div>

            {/* Mobile Menu */}

            {mobileOpen && (

                <div
                    className="
                        lg:hidden
                        bg-white
                        border-t
                        border-slate-200
                    "
                >

                    <div className="flex flex-col">

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/products"
                        >
                            Products
                        </NavLink>

                        <div className="border-t">

                            <div className="px-5 py-4 font-semibold">

                                Categories

                            </div>

                            {categories.map(category => (

                                <NavLink
                                    key={category.path}
                                    to={category.path}
                                    className="
                                        block
                                        px-8
                                        py-3
                                        hover:bg-slate-100
                                    "
                                >

                                    {category.name}

                                </NavLink>

                            ))}

                        </div>

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/offers"
                        >
                            Offers
                        </NavLink>

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/brands"
                        >
                            Brands
                        </NavLink>

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/about"
                        >
                            About
                        </NavLink>

                        <NavLink
                            className="px-5 py-4 hover:bg-slate-100"
                            to="/contact"
                        >
                            Contact
                        </NavLink>

                    </div>

                </div>

            )}

        </nav>

    );

}