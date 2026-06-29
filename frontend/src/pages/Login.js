import { useState, useContext } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        const res = await loginUser({
            email,
            password
        });

        login(res.data.data.user, res.data.data.token);
    };

    return (
        <div className="p-10">

            <h2 className="text-2xl font-bold">Login</h2>

            <input
                placeholder="Email"
                className="border p-2 mt-2 w-full"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border p-2 mt-2 w-full"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
                Login
            </button>

        </div>
    );
}