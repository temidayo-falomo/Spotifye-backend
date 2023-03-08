"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user-controller");
const userRouter = express_1.default.Router();
//ROUTES
userRouter.get("/all-users", user_controller_1.getAllUsers);
userRouter.post("/add-user", user_controller_1.newUser);
userRouter.get("/user/:id", user_controller_1.getUser);
userRouter.put("/like-song", user_controller_1.likeSong);
userRouter.put("/unlike-song", user_controller_1.unlikeSong);
userRouter.put("/follow-artist", user_controller_1.followArtist);
userRouter.put("/unfollow-artist", user_controller_1.unfollowArtist);
exports.default = userRouter;
//# sourceMappingURL=user-routes.js.map