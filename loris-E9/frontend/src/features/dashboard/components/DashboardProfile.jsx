import { FiUser, FiShield } from "react-icons/fi";

export default function DashboardProfile({

    user,

    collapsed = false

}) {

    const initials = user?.name
        ?.split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase() || "LE";

    return (

        <section
            className="
                border-b
                border-slate-200
                bg-white
                p-5
            "
        >

            <div className="flex items-center gap-3">

                {/* Avatar */}

                <div className="relative">

                    {

                        user?.avatar ? (

                            <img

                                src={user.avatar}

                                alt={user.name}

                                className="
                                    h-14
                                    w-14
                                    rounded-full
                                    object-cover
                                    border-2
                                    border-blue-500
                                "

                            />

                        ) : (

                            <div
                                className="
                                    flex
                                    h-14
                                    w-14
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-blue-600
                                    text-lg
                                    font-bold
                                    text-white
                                "
                            >

                                {initials}

                            </div>

                        )

                    }

                    {/* Online Indicator */}

                    <span
                        className="
                            absolute
                            bottom-0
                            right-0
                            h-4
                            w-4
                            rounded-full
                            border-2
                            border-white
                            bg-green-500
                        "
                    />

                </div>

                {/* User Information */}

                {

                    !collapsed && (

                        <div className="min-w-0 flex-1">

                            <h3
                                className="
                                    truncate
                                    text-base
                                    font-semibold
                                    text-slate-800
                                "
                            >

                                {user?.name || "Guest User"}

                            </h3>

                            <p
                                className="
                                    truncate
                                    text-sm
                                    text-slate-500
                                "
                            >

                                {user?.email}

                            </p>

                            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">

                                <FiShield size={13} />

                                <span>

                                    {user?.role || "Customer"}

                                </span>

                            </div>

                        </div>

                    )

                }

            </div>

        </section>

    );

}
