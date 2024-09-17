import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config(
    {
        path: './env',
    }
);

connectDB()
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