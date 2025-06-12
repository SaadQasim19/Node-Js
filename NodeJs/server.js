import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import user_routes from "./routes/user_routes.js"; // 
import cors from "cors";

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

// Route
app.use("/db/user", user_routes);

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
