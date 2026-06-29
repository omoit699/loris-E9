import { useState } from "react";
import { createOrder } from "../api/orderApi";

export default function Checkout() {

    const [address, setAddress] = useState({
        fullName: "",
        phone: "",
        region: "",
        city: "",
        street: ""
    });

    const [paymentMethod, setPaymentMethod] = useState("cash");

    const handleChange = (e) => {

        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleCheckout = async () => {

        await createOrder({
            shippingAddress: address,
            paymentMethod
        });

        alert("Order placed successfully");
    };

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold">
                Checkout
            </h1>

            <input
                name="fullName"
                placeholder="Full Name"
                className="border p-2 w-full mt-2"
                onChange={handleChange}
            />

            <input
                name="phone"
                placeholder="Phone"
                className="border p-2 w-full mt-2"
                onChange={handleChange}
            />

            <input
                name="region"
                placeholder="Region"
                className="border p-2 w-full mt-2"
                onChange={handleChange}
            />

            <input
                name="city"
                placeholder="City"
                className="border p-2 w-full mt-2"
                onChange={handleChange}
            />

            <input
                name="street"
                placeholder="Street"
                className="border p-2 w-full mt-2"
                onChange={handleChange}
            />

            <select
                className="border p-2 w-full mt-2"
                onChange={(e) =>
                    setPaymentMethod(e.target.value)
                }
            >
                <option value="cash">Cash on Delivery</option>
                <option value="mtn_momo">MTN MoMo</option>
                <option value="airtel_money">Airtel Money</option>
            </select>

            <button
                onClick={handleCheckout}
                className="bg-green-600 text-white px-4 py-2 mt-4"
            >
                Place Order
            </button>

        </div>
    );
}