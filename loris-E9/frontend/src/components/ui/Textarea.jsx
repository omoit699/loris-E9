export default function Textarea({
    label,
    error,
    rows = 5,
    ...props
}) {
    return (
        <div className="space-y-2">

            {label && (
                <label className="font-semibold text-slate-700">
                    {label}
                </label>
            )}

            <textarea

                rows={rows}

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    p-4
                    outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-600
                "

                {...props}

            />

            {error && (

                <p className="text-red-600 text-sm">

                    {error}

                </p>

            )}

        </div>
    );
}