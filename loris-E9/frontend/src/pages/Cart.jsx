import { useEffect, useState } from "react";
import { getCart } from "../api/cartApi";

export default function Cart() {

    const [cart, setCart] = useState(null);

    const fetchCart = async () => {

        const res = await getCart();

        setCart(res.data.data);
    };

    useEffect(() => {

        fetchCart();

    }, []);

    if (!cart) return <p>Loading cart...</p>;

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold">
                Your Cart
            </h1>

            {cart.items.map((item) => (

                <div
                    key={item.product}
                    className="border p-3 mt-2"
                >

                    <p>
                        Product: {item.product}
                    </p>

                    <p>
                        Qty: {item.quantity}
                    </p>

                    <p>
                        Price: {item.priceAtTime}
                    </p>

                </div>

            ))}

            <h2 className="mt-4 font-bold">
                Total: UGX {cart.totalPrice}
            </h2>

        </div>
    );
}