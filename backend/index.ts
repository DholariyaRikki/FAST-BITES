import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectdb";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route";
import restaurantRoute from "./routes/restaurant.route";
import menuRoute from "./routes/menu.route";
import orderRoute from "./routes/order.route";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


// default middleware for any mern project
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "https://fast-bites.onrender.com",
    credentials: true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restaurant", restaurantRoute);
app.use("/api/v1/menu", menuRoute);
app.use("/api/v1/order", orderRoute);

const DIRNAME = __dirname;  // Ensure this is set correctly
app.use(express.static(path.join(DIRNAME, '../frontend/dist')));

// Catch-all route to serve index.html (for client-side routing in SPAs)
app.use("*", (_, res) => {
    res.sendFile(path.join(DIRNAME, "../frontend/dist", "index.html"));
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});