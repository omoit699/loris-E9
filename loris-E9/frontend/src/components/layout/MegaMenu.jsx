import MegaMenuItem from "./MegaMenuItem";
import categories from "../../constants/categories";
import Button from "../ui/Button";

export default function MegaMenu({

    isOpen

}) {

    if (!isOpen) return null;

    const left = categories.slice(0, 4);

    const right = categories.slice(4);

    return (

        <div

            className="
                absolute
                left-0
                top-full
                mt-2
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-2xl
                z-50
                overflow-hidden
            "

        >

            <div className="grid grid-cols-12">

                {/* Categories */}

                <div className="col-span-8 p-8">

                    <div className="grid grid-cols-2 gap-10">

                        <MegaMenuItem

                            title="Construction & Hardware"

                            items={left}

                        />

                        <MegaMenuItem

                            title="Equipment & Agriculture"

                            items={right}

                        />

                    </div>

                </div>

                {/* Promotion Panel */}

                <div

                    className="
                        col-span-4
                        bg-gradient-to-br
                        from-blue-700
                        to-blue-900
                        text-white
                        p-8
                        flex
                        flex-col
                        justify-between
                    "

                >

                    <div>

                        <span

                            className="
                                inline-block
                                rounded-full
                                bg-orange-500
                                px-3
                                py-1
                                text-xs
                                font-semibold
                            "

                        >

                            LIMITED OFFER

                        </span>

                        <h2 className="mt-6 text-3xl font-bold">

                            Save up to

                            <br />

                            20% on

                            <br />

                            Power Tools

                        </h2>

                        <p className="mt-4 text-blue-100">

                            Discover premium equipment from trusted
                            manufacturers for professionals and DIY projects.

                        </p>

                    </div>

                    <Button

                        variant="secondary"

                        className="mt-8"

                    >

                        Shop Now

                    </Button>

                </div>

            </div>

        </div>

    );

}