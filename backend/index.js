import  express from "express";
import mongoose from "mongoose";
import userRouter from './routes/userRoute.js'



mongoose.connect("mongodb://localhost:27017").then(()=> {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log(err);
});


const app = express();
app.listen(3000,() => {
    console.log(`server is listening on http://localhost:3000`);
});

 app.use("/api/user",userRouter);