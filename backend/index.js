import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import dns from "node:dns";

dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);

dotenv.config({});

const app = express();
// PORT
const PORT = process.env.PORT || 8000

//middlewere 
app.use(express.json())
app.use(cors({
    origin:'http://127.0.0.1:5500/index.html'
}))

//routes
app.get('/',(req,res)=>{
    res.send("Registration API is running")
})


const startServer = async ()=>{
    await connectDB()

    app.listen(PORT,()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
}

startServer()
