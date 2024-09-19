import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

// function for connecting to db
const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}   

// export function
export default connectdb 