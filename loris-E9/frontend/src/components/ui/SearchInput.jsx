import { FiSearch } from "react-icons/fi";

export default function SearchInput({
    placeholder = "Search products...",
    ...props
}) {
    return (
        <div className="relative w-full">
            <FiSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
            />

            <input
                type="search"
                placeholder={placeholder}
                className="
                    w-full
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    transition-all
                    duration-300
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                "
                {...props}
            />
        </div>
    );
}