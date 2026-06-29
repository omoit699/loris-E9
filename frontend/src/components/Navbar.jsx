import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

    const { user, logout } = useContext(AuthContext);

    return (
        <div className="flex justify-between p-4 shadow">

            <Link to="/" className="font-bold">
                Loris E-9
            </Link>

            <div className="flex gap-4">

                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Orders</Link>

                {user?.role === "admin" && (
                    <Link to="/admin">Admin</Link>
                )}

                {!user ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <button onClick={logout}>
                        Logout
                    </button>
                )}

            </div>
        </div>
    );
}