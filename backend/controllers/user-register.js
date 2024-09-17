import bcrypt from "bcryptjs";
import { User } from "../models/user.models.js";

const registerUser = async (req, res) => {
    const {userName, email, password} = req.body;
    
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user already exists"
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: 'User registered Successfully!'
        })
    }
    catch (error) {
        console.log("Error while registering: ", error);
        res.status(500).json({
            message: 'Server Error ',
        });
    }
};

export default registerUser;