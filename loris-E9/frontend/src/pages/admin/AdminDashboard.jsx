import { useEffect, useState } from "react";
import { adminGetProducts, adminGetOrders } from "../../api/adminApi";

export default function AdminDashboard() {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    const loadData = async () => {

        const p = await adminGetProducts();
        const o = await adminGetOrders();

        setProducts(p.data.data || []);
        setOrders(o.data.data || []);
    };

    useEffect(() => {

        loadData();

    }, []);

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold">
                Admin Dashboard
            </h1>

            {/* PRODUCTS */}
            <h2 className="mt-4 font-bold">Products</h2>

            {products.map((p) => (
                <div key={p._id} className="border p-2 mt-2">
                    {p.name} — UGX {p.price}
                </div>
            ))}

            {/* ORDERS */}
            <h2 className="mt-6 font-bold">Orders</h2>

            {orders.map((o) => (
                <div key={o._id} className="border p-2 mt-2">
                    Order: {o._id} — UGX {o.totalPrice}
                </div>
            ))}

        </div>
    );
}