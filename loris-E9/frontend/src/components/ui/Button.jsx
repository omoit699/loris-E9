import React from "react";
import clsx from "clsx";

const variants = {
    primary:
        "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
        "bg-orange-500 hover:bg-orange-600 text-white",

    outline:
        "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",

    success:
        "bg-green-600 hover:bg-green-700 text-white",

    danger:
        "bg-red-600 hover:bg-red-700 text-white",

    ghost:
        "bg-transparent hover:bg-slate-100 text-slate-700"
};

const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-7 py-4 text-lg"
};

export default function Button({

    children,

    variant = "primary",

    size = "md",

    fullWidth = false,

    loading = false,

    disabled = false,

    className = "",

    ...props

}) {

    return (

        <button

            disabled={disabled || loading}

            className={clsx(

                "rounded-xl font-semibold transition-all duration-300 shadow-sm",

                "disabled:opacity-60 disabled:cursor-not-allowed",

                variants[variant],

                sizes[size],

                fullWidth && "w-full",

                className

            )}

            {...props}

        >

            {loading ? "Loading..." : children}

        </button>

    );

}