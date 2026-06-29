import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import { addToCart } from "../api/cartApi";

export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {

        const res = await getProductById(id);

        setProduct(res.data.data);
    };

    const handleAddToCart = async () => {

        await addToCart({
            productId: id,
            quantity: 1
        });

        alert("Added to cart");
    };

    useEffect(() => {

        fetchProduct();

    }, []);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold">
                {product.name}
            </h1>

            <p className="mt-2">
                {product.description}
            </p>

            <p className="mt-2 font-bold">
                UGX {product.finalPrice}
            </p>

            <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white px-4 py-2 mt-4"
            >
                Add to Cart
            </button>

        </div>
    );
}