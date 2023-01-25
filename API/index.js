import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import router from "../API/routes/auth.js"
import hotelsrouter from "../API/routes/hotels.js"
import roomsrouter from "../API/routes/rooms.js"
import usersrouter from "../API/routes/users.js"

const app = express();
dotenv.config()


app.use(express.json())
//middlewares
app.use("/api/auth",router);
app.use("/api/hotel",hotelsrouter);
app.use("/api/rooms",roomsrouter);
app.use("/api/users",usersrouter);

//errormiddleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});


const connect = async ()=>
{

try {
    await mongoose.connect(process.env.Mongo);
    console.log("connected DB ")
  } catch (error) {
    throw(error);
  }

};

mongoose.connection.on('error', () => {
   console.log("error");
  });

  mongoose.connection.on('connected', err => {
    console.log("connected")
  });

mongoose.set("strictQuery",true)
app.listen("8080",()=>
{
connect();  
console.log("connected to Backend !") 

})