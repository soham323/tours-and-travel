import { Inquiry } from "../models/inquiry.models.js";

const inquiryMessage = async (req, res) => {
    const {name, email, message} = req.body;

    try{
        const newInquiry = new Inquiry({
            name,
            email,
            message,
        })

        await newInquiry.save()

        res.status(200).json({
            message: "Message Sent Successfully!"
        })
    }
    catch (error) {
        console.log("Error Occurred: ", error);
        res.status(500).json({
            message: "Server Error",
        })

    }
};

export default inquiryMessage;