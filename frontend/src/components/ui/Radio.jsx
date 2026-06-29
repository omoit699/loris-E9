export default function Radio({

    label,

    ...props

}) {

    return (

        <label className="flex items-center gap-3 cursor-pointer">

            <input

                type="radio"

                className="accent-blue-600"

                {...props}

            />

            <span>

                {label}

            </span>

        </label>

    );

}