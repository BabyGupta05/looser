import mongoose from "mongoose";
import dotenv from "dotenv";
// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });
// MongoDB URI from the environment variable
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env.local");
  process.exit(1);
}
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};
export default connectDB;
