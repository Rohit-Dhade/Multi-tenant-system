import app from "./src/app.ts";
import 'dotenv/config';
import mongoose from "mongoose";

const PORT = process.env.PORT ?? 5000;
const MONGO_URI = process.env.MONGO_URI!;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ✓");
        app.listen(PORT, () => {
            console.log(`server is running on PORT=${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    });