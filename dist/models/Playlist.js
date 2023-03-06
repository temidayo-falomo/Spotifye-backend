"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
//SCHEMA FOR USER
var Schema = mongoose_1.default.Schema;
var PlaylistSchema = new Schema({
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
    }
});
exports.default = mongoose_1.default.model("Playlist", PlaylistSchema);
