import { FiTruck, FiPhone, FiMapPin } from "react-icons/fi";

export default function AnnouncementBar() {
    return (
        <div className="bg-slate-900 text-white text-sm">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">

                    <div className="flex items-center gap-2">
                        <FiTruck size={16} />
                        <span>
                            Free delivery within Bukedea Town on qualifying orders.
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">

                        <div className="flex items-center gap-2">
                            <FiPhone size={16} />
                            <span>+256 XXX XXX XXX</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FiMapPin size={16} />
                            <span>Bukedea, Uganda</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}