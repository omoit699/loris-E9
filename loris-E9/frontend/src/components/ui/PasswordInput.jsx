import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function PasswordInput({
    label,
    error,
    className = "",
    ...props
}) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full space-y-2">
            {label && (
                <label className="block text-sm font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className={`
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        py-3
                        pr-12
                        outline-none
                        transition-all
                        duration-300
                        focus:border-blue-600
                        focus:ring-4
                        focus:ring-blue-100
                        ${error ? "border-red-500 focus:ring-red-100" : ""}
                        ${className}
                    `}
                    {...props}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
            </div>

            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}