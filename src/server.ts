import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoute";

dotenv.config();
const server = express();
server.use(cors());
server.use("/api", userRoutes);

server.listen(process.env.PORT);