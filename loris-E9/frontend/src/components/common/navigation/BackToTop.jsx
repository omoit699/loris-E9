import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            setVisible(window.scrollY > 350);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    const scrollToTop = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    return (

        <button

            onClick={scrollToTop}

            className={`
                fixed
                bottom-6
                right-6
                z-40
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:bg-blue-700
                hover:scale-105
                ${
                    visible
                        ? "opacity-100 translate-y-0"
                        : "pointer-events-none opacity-0 translate-y-4"
                }
            `}

            aria-label="Back to top"

        >

            <FiArrowUp size={22} />

        </button>

    );

}