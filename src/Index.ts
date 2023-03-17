import express, { Application, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import playlistRouter from "./routes/playlist-routes";
dotenv.config();

const app: Application = express();

//MIDDLEWARES
app.use(
  cors({
    origin: ["http://localhost:3000", "https://spotify-e.netlify.app"],
  })
);
app.use(express.json());
app.use("/api", userRouter);
app.use("/api/playlists", playlistRouter);

//* CONNECT MONGODB & START SERVER
mongoose.set("strictQuery", true);
mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    app.listen(process.env.PORT);
  })
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });
