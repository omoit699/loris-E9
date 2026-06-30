import { FaWhatsapp } from "react-icons/fa";
import company from "../../../constants/company";

export default function FloatingWhatsApp() {

    const phone = company.whatsapp.replace(/\+/g, "");

    const message = encodeURIComponent(
        "Hello Loris E-9, I would like to inquire about your products."
    );

    return (

        <a

            href={`https://wa.me/${phone}?text=${message}`}

            target="_blank"

            rel="noopener noreferrer"

            aria-label="Chat on WhatsApp"

            className="
                fixed
                bottom-24
                right-6
                z-40
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:scale-110
                hover:bg-green-600
            "

        >

            <FaWhatsapp size={30} />

        </a>

    );

}