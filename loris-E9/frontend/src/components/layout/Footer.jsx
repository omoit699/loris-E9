import { Link } from "react-router-dom";
import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiClock,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiYoutube,
    FiArrowUp
} from "react-icons/fi";

import company from "../../constants/company";
import footer from "../../constants/footer";
import categories from "../../constants/categories";

import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function Footer() {

    const year = new Date().getFullYear();

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <footer className="bg-slate-900 text-slate-300 mt-20">

            {/* Newsletter */}

            <div className="border-b border-slate-800">

                <div className="max-w-7xl mx-auto px-4 py-10">

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <h2 className="text-3xl font-bold text-white">

                                Stay Updated

                            </h2>

                            <p className="mt-2 text-slate-400">

                                Receive offers, promotions and new arrivals
                                directly in your inbox.

                            </p>

                        </div>

                        <form className="flex flex-col sm:flex-row gap-4">

                            <input

                                type="email"

                                placeholder="Enter your email"

                                className="
                                    flex-1
                                    rounded-xl
                                    px-4
                                    py-3
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    outline-none
                                    focus:border-blue-500
                                "

                            />

                            <Button variant="secondary">

                                Subscribe

                            </Button>

                        </form>

                    </div>

                </div>

            </div>

            {/* Main Footer */}

            <div className="max-w-7xl mx-auto px-4 py-16">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}

                    <div>

                        <img

                            src={company.logo}

                            alt={company.name}

                            className="h-14 mb-5"

                        />

                        <h3 className="text-white text-xl font-bold">

                            {company.name}

                        </h3>

                        <p className="mt-3 leading-7">

                            {company.description}

                        </p>

                        <div className="space-y-3 mt-6">

                            <div className="flex gap-3">

                                <FiMapPin />

                                <span>{company.address}</span>

                            </div>

                            <div className="flex gap-3">

                                <FiPhone />

                                <span>{company.phone}</span>

                            </div>

                            <div className="flex gap-3">

                                <FiMail />

                                <span>{company.email}</span>

                            </div>

                        </div>

                    </div>

                    {/* Categories */}

                    <div>

                        <h3 className="text-xl text-white font-bold mb-5">

                            Shop

                        </h3>

                        <div className="space-y-3">

                            {categories.map(category => (

                                <Link

                                    key={category.id}

                                    to={`/category/${category.slug}`}

                                    className="
                                        block
                                        hover:text-orange-400
                                        transition
                                    "

                                >

                                    {category.name}

                                </Link>

                            ))}

                        </div>

                    </div>

                    {/* Customer */}

                    <div>

                        <h3 className="text-xl text-white font-bold mb-5">

                            Customer Service

                        </h3>

                        <div className="space-y-3">

                            {footer.customerService.map(item => (

                                <Link

                                    key={item}

                                    to="#"

                                    className="
                                        block
                                        hover:text-orange-400
                                        transition
                                    "

                                >

                                    {item}

                                </Link>

                            ))}

                        </div>

                        <div className="mt-8">

                            <div className="flex gap-3">

                                <FiClock />

                                <span>

                                    {footer.openingHours.weekdays}

                                </span>

                            </div>

                            <div className="mt-2">

                                Saturday: {footer.openingHours.saturday}

                            </div>

                            <div>

                                Sunday: {footer.openingHours.sunday}

                            </div>

                        </div>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-xl text-white font-bold mb-5">

                            Follow Us

                        </h3>

                        <div className="flex gap-4">

                            <a href="#" className="text-2xl hover:text-orange-400">

                                <FiFacebook />

                            </a>

                            <a href="#" className="text-2xl hover:text-orange-400">

                                <FiInstagram />

                            </a>

                            <a href="#" className="text-2xl hover:text-orange-400">

                                <FiLinkedin />

                            </a>

                            <a href="#" className="text-2xl hover:text-orange-400">

                                <FiYoutube />

                            </a>

                        </div>

                        <div className="mt-10">

                            <h4 className="font-semibold text-white mb-4">

                                Secure Payments

                            </h4>

                            <div className="grid grid-cols-2 gap-3">

                                <div className="rounded-lg bg-slate-800 p-3 text-center">

                                    Visa

                                </div>

                                <div className="rounded-lg bg-slate-800 p-3 text-center">

                                    Mastercard

                                </div>

                                <div className="rounded-lg bg-slate-800 p-3 text-center">

                                    MTN MoMo

                                </div>

                                <div className="rounded-lg bg-slate-800 p-3 text-center">

                                    Airtel Money

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <Divider className="my-10 border-slate-800" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <p>

                        © {year} {company.name}. All rights reserved.

                    </p>

                    <button

                        onClick={scrollToTop}

                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-600
                            hover:bg-blue-700
                            px-5
                            py-3
                            text-white
                            transition
                        "

                    >

                        <FiArrowUp />

                        Back to Top

                    </button>

                </div>

            </div>

        </footer>

    );

}