import express, { NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

//DB and authenticateUser
import connectDB from "./db/connect";

//Routers
import authRoutes from './Routes/authRoutes'
import characterRoutes from './Routes/characterRoutes'

//Middleware
import NotFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";



const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("welcome");
});

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/auth", characterRoutes)

app.use(NotFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async() => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT,()=>{
      console.log("Server up at port: ", PORT)
    })
  } catch (error) {
    
  }
}
start()
