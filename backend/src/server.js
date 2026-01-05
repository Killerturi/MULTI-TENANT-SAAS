import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(process.env.PORT, () =>
            console.log(`🚀 Server running on port ${process.env.PORT}`)
        );
    })
    .catch((err) => console.error("❌ DB Error", err));
