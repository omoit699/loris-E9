import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";

export default function Products() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        const res = await getProducts();

        setProducts(res.data.data || []);
    };

    useEffect(() => {

        fetchProducts();

    }, []);

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">
                Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {products.map((p) => (

                    <ProductCard
                        key={p._id}
                        product={p}
                    />

                ))}

            </div>

        </div>
    );
}