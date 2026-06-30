export default function PageLoader() {

    return (

        <div className="flex min-h-[300px] items-center justify-center">

            <div className="flex flex-col items-center gap-5">

                <div
                    className="
                        h-14
                        w-14
                        animate-spin
                        rounded-full
                        border-4
                        border-blue-600
                        border-t-transparent
                    "
                />

                <p className="text-slate-600 font-medium">

                    Loading...

                </p>

            </div>

        </div>

    );

}