import { Tour } from "../models/uploadTour.models.js";

export const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.status(200).json({
            success: true,
            tours,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while fetching tours", error
        })
    }
}
