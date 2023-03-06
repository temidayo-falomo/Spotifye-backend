import express from "express";
import {
  followArtist,
  getAllUsers,
  getUser,
  likeSong,
  newUser,
  unfollowArtist,
  unlikeSong,
} from "../controllers/user-controller";

const userRouter = express.Router();

//ROUTES
userRouter.get("/all-users", getAllUsers);
userRouter.post("/add-user", newUser);
userRouter.get("/user/:id", getUser);
userRouter.put("/like-song", likeSong);
userRouter.put("/unlike-song", unlikeSong);

userRouter.put("/follow-artist", followArtist);
userRouter.put("/unfollow-artist", unfollowArtist);

export default userRouter;
