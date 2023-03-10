"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playlist_controller_1 = require("../controllers/playlist-controller");
const playlistRouter = express_1.default.Router();
//ROUTES
playlistRouter.get("/all-playlists", playlist_controller_1.getAllPlaylists);
playlistRouter.post("/add-playlist", playlist_controller_1.newPlaylist);
playlistRouter.delete("/remove-playlist/:id", playlist_controller_1.deletePlaylist);
playlistRouter.get("/playlist/:id", playlist_controller_1.getPlaylist);
playlistRouter.put("/add-track", playlist_controller_1.addSongToPlaylist);
playlistRouter.put("/remove-track", playlist_controller_1.removeSongFromPlaylist);
playlistRouter.put("/edit-playlist-name", playlist_controller_1.editPlaylistName);
playlistRouter.get("/user-playlists/:id", playlist_controller_1.getUserPlaylist);
exports.default = playlistRouter;
//# sourceMappingURL=playlist-routes.js.map