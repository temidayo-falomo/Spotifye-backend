"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//SCHEMA FOR USER
const Schema = mongoose_1.default.Schema;
const PlaylistSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    picture_xl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    tracklist: [],
    type: {
        type: String,
        required: true,
    },
    creatorId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.default = mongoose_1.default.model("Playlist", PlaylistSchema);
//# sourceMappingURL=Playlist.js.map