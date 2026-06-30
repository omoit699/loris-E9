import { NavLink } from "react-router-dom";
import {
    FiX,
    FiChevronRight,
    FiUser,
    FiShoppingCart,
    FiHeart,
    FiHome,
    FiTag,
    FiInfo,
    FiPhone
} from "react-icons/fi";

import navigation from "@/constants/navigation";
import categories from "@/constants/categories";
import company from "@/constants/company";

export default function MobileMenu({

    isOpen,

    onClose

}) {

    if (!isOpen) return null;

    return (

        <>

            {/* Overlay */}

            <div

                onClick={onClose}

                className="
                    fixed
                    inset-0
                    bg-black/50
                    z-40
                    backdrop-blur-sm
                "

            />

            {/* Drawer */}

            <aside

                className="
                    fixed
                    top-0
                    left-0
                    h-screen
                    w-80
                    max-w-[90vw]
                    bg-white
                    z-50
                    shadow-2xl
                    overflow-y-auto
                    animate-[slideIn_.25s_ease]
                "

            >

                {/* Header */}

                <div

                    className="
                        flex
                        items-center
                        justify-between
                        p-5
                        border-b
                    "

                >

                    <div>

                        <h2 className="text-xl font-bold text-blue-700">

                            {company.name}

                        </h2>

                        <p className="text-sm text-slate-500">

                            {company.slogan}

                        </p>

                    </div>

                    <button

                        onClick={onClose}

                        className="
                            rounded-lg
                            p-2
                            hover:bg-slate-100
                        "

                    >

                        <FiX size={24} />

                    </button>

                </div>

                {/* Account */}

                <div className="p-5 border-b">

                    <NavLink

                        to="/login"

                        onClick={onClose}

                        className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            bg-blue-600
                            text-white
                            p-4
                        "

                    >

                        <FiUser size={22} />

                        <div>

                            <div className="font-semibold">

                                Sign In

                            </div>

                            <small>

                                Access your account

                            </small>

                        </div>

                    </NavLink>

                </div>

                {/* Quick Actions */}

                <div className="p-5 border-b">

                    <div className="grid grid-cols-2 gap-3">

                        <NavLink

                            to="/wishlist"

                            onClick={onClose}

                            className="
                                rounded-xl
                                border
                                p-4
                                flex
                                flex-col
                                items-center
                                gap-2
                            "

                        >

                            <FiHeart size={22} />

                            Wishlist

                        </NavLink>

                        <NavLink

                            to="/cart"

                            onClick={onClose}

                            className="
                                rounded-xl
                                border
                                p-4
                                flex
                                flex-col
                                items-center
                                gap-2
                            "

                        >

                            <FiShoppingCart size={22} />

                            Cart

                        </NavLink>

                    </div>

                </div>

                {/* Navigation */}

                <div className="p-5">

                    <h3 className="font-bold mb-4">

                        Navigation

                    </h3>

                    <div className="space-y-1">

                        {navigation.map(item => (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                onClick={onClose}

                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-lg
                                    px-4
                                    py-3
                                    hover:bg-slate-100
                                "

                            >

                                <span>

                                    {item.title}

                                </span>

                                <FiChevronRight />

                            </NavLink>

                        ))}

                    </div>

                </div>

                {/* Categories */}

                <div className="p-5 border-t">

                    <h3 className="font-bold mb-4">

                        Shop Categories

                    </h3>

                    <div className="space-y-1">

                        {categories.map(category => (

                            <NavLink

                                key={category.id}

                                to={`/category/${category.slug}`}

                                onClick={onClose}

                                className="
                                    flex
                                    justify-between
                                    items-center
                                    rounded-lg
                                    px-4
                                    py-3
                                    hover:bg-slate-100
                                "

                            >

                                <span>

                                    {category.name}

                                </span>

                                <FiChevronRight />

                            </NavLink>

                        ))}

                    </div>

                </div>

                {/* Contact */}

                <div className="p-5 border-t">

                    <div className="flex items-center gap-3">

                        <FiPhone />

                        {company.phone}

                    </div>

                    <div className="mt-2 flex items-center gap-3">

                        <FiHome />

                        {company.address}

                    </div>

                </div>

            </aside>

        </>

    );

}