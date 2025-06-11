import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import user_routes from "./routes/user.js";
import cors from "cors";

dotenv.config();
app.use(cors());

const app = express();
const Port = process.env.PORT || 3000;

//& Middleware
app.use(express.json());

//& Connect to MongoDB
connectDB();

//& Route
app.use("/db/user", user_routes);

app.listen(Port, () => {
  console.log(`Server is running on port https://localhost:${Port}`);
});
