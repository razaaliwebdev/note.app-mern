import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Successfully...`);
    } catch (error) {
        console.log("MongoDB connection error", error);
    }
};

export default connectDB;