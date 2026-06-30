import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

export default function MegaMenuItem({

    title,

    items = []

}) {

    return (

        <div>

            <h3 className="mb-4 text-lg font-bold text-slate-800">

                {title}

            </h3>

            <div className="space-y-2">

                {items.map((item) => (

                    <NavLink

                        key={item.slug}

                        to={`/category/${item.slug}`}

                        className="
                            flex
                            items-center
                            justify-between
                            rounded-lg
                            px-3
                            py-2
                            text-slate-600
                            transition-all
                            hover:bg-slate-100
                            hover:text-blue-600
                        "

                    >

                        <span>{item.name}</span>

                        <FiChevronRight size={16} />

                    </NavLink>

                ))}

            </div>

        </div>

    );

}