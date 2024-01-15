import express from "express";
import router from "./routes/user.js";
import { config } from "dotenv";

config({
    path:"./data/config.env",
})


export const app = express();

app.use(express.json());
app.use("/users",router);

