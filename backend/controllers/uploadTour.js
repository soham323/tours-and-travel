import { Tour } from "../models/uploadTour.models.js";

export const uploadTour = async (req, res) => {
    const {name, description, price, days, nights, countries, cities, tourImage} = req.body;
        
    try {
        const newTour = new Tour({name, description, price, days, nights, countries, cities, tourImage});
        await newTour.save();
        res.status(201).json({
            message: "Tour Uploaded Successfully! ",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error uploading tour", error,
        })
    };
}