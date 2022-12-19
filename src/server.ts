import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoute";

// rodando a função que permite usar varivaveis do enviroment (dotenv)
dotenv.config();

// rodando servidor express
const server = express();
// permitindo o cors
server.use(cors());

//
server.use(express.urlencoded({extended: true}));

// servidor usando as rotas
server.use("/api", userRoutes);

// servidor escutado nessa porta
server.listen(process.env.PORT);