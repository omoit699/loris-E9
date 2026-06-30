export default function Select({

    label,

    options = [],

    error,

    ...props

}) {

    return (

        <div className="space-y-2">

            {label && (

                <label className="font-semibold text-slate-700">

                    {label}

                </label>

            )}

            <select

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-600
                "

                {...props}

            >

                {options.map(option => (

                    <option

                        key={option.value}

                        value={option.value}

                    >

                        {option.label}

                    </option>

                ))}

            </select>

            {error && (

                <p className="text-red-600 text-sm">

                    {error}

                </p>

            )}

        </div>

    );

}