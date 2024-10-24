import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from './Routers/productRouter.js';

//dotenv config
dotenv.config();

//initilaize
const app = express();

//default middleware for req.body
app.use(express.json());

//cors middleware
app.use(
    cors({
    origin:"*",
    credentials:true,
    methods:["GET","PUT","POST","DELETE"],
}));


//default router

app.get("/",(req,res)=>{
  res.status(200).send("welcome")
})

//custom router 
app.use('/api/product',productRoute)

//port  declare
const port =process.env.PORT || 5000;

//Start the Server
app.listen(port,()=>{
    console.log("Server started and running on the port")
})