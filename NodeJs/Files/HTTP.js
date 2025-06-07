import express from 'express';
import dotenv from dotenv;
const app = express();
const Port = process.env.PORT;
dotenv.config();

app.use(express.json());


app.get('/' , (req , res)=>{
    res.send("Home Page");
});

app.post('/user' , (req , res)=>{
    const data = req.body;
})
  
app.listen(Port, ()=>{

  console.log(`🚀 Server running on http://localhost:${Port}`);
})