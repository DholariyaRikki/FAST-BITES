import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectdb"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.routs";

import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const DIRNAME = path.resolve();

// default middleware for any mern project
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "https://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});