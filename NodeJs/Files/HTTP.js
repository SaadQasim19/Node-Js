import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;

//& Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/user", (req, res) => {
  const { name, age, email } = req.body;
  console.log(`Data Recieved: ${req.body}`);
  res.json({ messgae: "Data Received" , name, age, email});
});



app.listen(Port, () => {
  console.log(`🚀 Server running on http://localhost:${Port}`);
});
