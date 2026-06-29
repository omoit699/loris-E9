import { useEffect, useState } from "react";
import { getOrders } from "../api/orderApi";

export default function Orders() {

    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {

        const res = await getOrders();

        setOrders(res.data.data || []);
    };

    useEffect(() => {

        fetchOrders();

    }, []);

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold">
                My Orders
            </h1>

            {orders.map((order) => (

                <div
                    key={order._id}
                    className="border p-3 mt-3"
                >

                    <p>
                        Order ID: {order._id}
                    </p>

                    <p>
                        Total: UGX {order.totalPrice}
                    </p>

                    <p>
                        Status: {order.orderStatus}
                    </p>

                    <p>
                        Payment: {order.paymentStatus}
                    </p>

                </div>

            ))}

        </div>
    );
}