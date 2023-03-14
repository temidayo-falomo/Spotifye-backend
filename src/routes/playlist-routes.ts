import express from "express";
import {
  addSongToPlaylist,
  deletePlaylist,
  editPlaylistName,
  getAllPlaylists,
  getPlaylist,
  getUserPlaylist,
  newPlaylist,
  removeSongFromPlaylist,
} from "../controllers/playlist-controller";

const playlistRouter = express.Router();

//ROUTES
playlistRouter.get("/all-playlists", getAllPlaylists);

playlistRouter.post("/add-playlist", newPlaylist);
playlistRouter.delete("/remove-playlist/:id", deletePlaylist);

playlistRouter.get("/playlist/:id", getPlaylist);

playlistRouter.put("/add-track", addSongToPlaylist);
playlistRouter.put("/remove-track", removeSongFromPlaylist);
playlistRouter.put("/edit-playlist-name", editPlaylistName);

playlistRouter.get("/user-playlists/:id", getUserPlaylist);

export default playlistRouter;
