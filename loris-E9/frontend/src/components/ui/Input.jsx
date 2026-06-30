import React from "react";

export default function Input({
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="w-full space-y-2">
            {label && (
                <label className="block text-sm font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <input
                className={`
                    w-full
                    rounded-xl
                    border
                    px-4
                    py-3
                    outline-none
                    transition-all
                    duration-300
                    bg-white
                    border-slate-300
                    focus:border-blue-600
                    focus:ring-4
                    focus:ring-blue-100
                    ${error ? "border-red-500 focus:ring-red-100" : ""}
                    ${className}
                `}
                {...props}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}