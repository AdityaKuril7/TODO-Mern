import express from 'express';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import connectDb from "./db/index.db.js";
import taskRouter from "./routes/task.route.js";
import cors from "cors"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",taskRouter);
const port = process.env.PORT || 8000;

connectDb().then(()=>{
  app.listen(port, () => console.log(`Server is running on port ${port}`))
}).catch(err=>console.log(err))

