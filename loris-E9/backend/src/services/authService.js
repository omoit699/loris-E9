import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

class AuthService {

    /**
     * 🔐 REGISTER USER
     */
    async register(data) {

        const existingUser = await User.findOne({
            email: data.email
        });

        if (existingUser) {
            throw new Error("User already exists");
        }

        const user = await User.create(data);

        const token = this.generateToken(user._id);

        return {
            user,
            token
        };
    }

    /**
     * 🔑 LOGIN USER
     */
    async login(email, password) {

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        const token = this.generateToken(user._id);

        return {
            user,
            token
        };
    }

    /**
     * 🎟️ GENERATE JWT TOKEN
     */
    generateToken(userId) {

        return jwt.sign(
            { id: userId },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "7d"
            }
        );
    }
}

export default new AuthService();