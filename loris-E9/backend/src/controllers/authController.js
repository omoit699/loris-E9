import asyncHandler from "../middleware/asyncHandler.js";
import AuthService from "../services/authService.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * 👤 REGISTER
 */
export const register = asyncHandler(async (req, res) => {

    const result = await AuthService.register(req.body);

    res.status(201).json(
        new ApiResponse(
            true,
            "User registered successfully",
            result
        )
    );
});

/**
 * 🔑 LOGIN
 */
export const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const result = await AuthService.login(email, password);

    res.status(200).json(
        new ApiResponse(
            true,
            "Login successful",
            result
        )
    );
});