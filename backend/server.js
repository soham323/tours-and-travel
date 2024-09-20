import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import bcrypt from "bcryptjs";
import userRegistration from "./routes/user.routes.js";
import uploadTour from "./routes/tour.routes.js";
dotenv.config(
    {
        path: './env',
    }
);

// calling database connection
app.use('/api/users', userRegistration)
app.use('/api/tours', uploadTour)

connectDB()

//Routes

//server connection
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is Running on PORT: ${process.env.PORT}`);
    });
    app.on("error", (err)=>{
        console.log(`Go an error while connecting to server : ${err}`);
        throw err;
    })
})
.catch(err=>{
    console.log("MongoDB connection Failed: ", err);
})