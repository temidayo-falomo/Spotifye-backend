"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const playlist_routes_1 = __importDefault(require("./routes/playlist-routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//MIDDLEWARES
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", user_routes_1.default);
app.use("/api/playlists", playlist_routes_1.default);
//* CONNECT MONGODB & START SERVER
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
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
//# sourceMappingURL=Index.js.map