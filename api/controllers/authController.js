import User from "../models/User.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
	// jwt token
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
};

export const signup = async (req, res) => {
	const { name, email, password, age, gender, genderPreference, travelPreferences } = req.body;
	try {
		// Validate required fields
		if (!name || !email || !password || !age || !gender || !genderPreference || !travelPreferences) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		// Validate age
		if (age < 18) {
			return res.status(400).json({
				success: false,
				message: "You must be at least 18 years old",
			});
		}

		// Validate password length
		if (password.length < 6) {
			return res.status(400).json({
				success: false,
				message: "Password must be at least 6 characters",
			});
		}

		// Create new user
		const newUser = await User.create({
			name,
			email,
			password,
			age,
			gender,
			genderPreference,
			travelPreferences, // Add travelPreferences to the user document
		});

		// Generate JWT token
		const token = signToken(newUser._id);

		// Set JWT cookie
		res.cookie("jwt", token, {
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
			httpOnly: true, // prevents XSS attacks
			sameSite: "strict", // prevents CSRF attacks
			secure: process.env.NODE_ENV === "production",
		});

		// Send response
		res.status(201).json({
			success: true,
			user: newUser,
		});
	} catch (error) {
		console.log("Error in signup controller:", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		// Validate required fields
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		// Find user by email
		const user = await User.findOne({ email }).select("+password");

		// Validate user and password
		if (!user || !(await user.matchPassword(password))) {
			return res.status(401).json({
				success: false,
				message: "Invalid email or password",
			});
		}

		// Generate JWT token
		const token = signToken(user._id);

		// Set JWT cookie
		res.cookie("jwt", token, {
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
			httpOnly: true, // prevents XSS attacks
			sameSite: "strict", // prevents CSRF attacks
			secure: process.env.NODE_ENV === "production",
		});

		// Send response
		res.status(200).json({
			success: true,
			user,
		});
	} catch (error) {
		console.log("Error in login controller:", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

export const logout = async (req, res) => {
	res.clearCookie("jwt");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};