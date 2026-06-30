export default function Card({

    children,

    className = ""

}) {

    return (

        <div

            className={`
                bg-white
                rounded-2xl
                shadow-md
                border
                border-slate-200
                transition
                duration-300
                hover:shadow-xl
                hover:-translate-y-1
                ${className}
            `}

        >

            {children}

        </div>

    );

}