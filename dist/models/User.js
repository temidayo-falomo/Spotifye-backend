"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//SCHEMA FOR USER
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userAvatar: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likedSongs: [],
    likedPlaylists: [],
    likedAlbums: [],
    followedArtists: [],
});
exports.default = mongoose_1.default.model("User", UserSchema);
//# sourceMappingURL=User.js.map