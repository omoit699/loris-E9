import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {

    const navigate = useNavigate();

    return (
        <div className="border p-4 rounded shadow">

            <h3 className="font-bold text-lg">
                {product.name}
            </h3>

            <p className="text-gray-600">
                UGX {product.finalPrice}
            </p>

            <p className="text-sm">
                Stock: {product.quantity}
            </p>

            <button
                onClick={() =>
                    navigate(`/product/${product._id}`)
                }
                className="bg-blue-500 text-white px-3 py-1 mt-2"
            >
                View
            </button>

        </div>
    );
}