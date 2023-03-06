import { Request, Response, NextFunction } from "express";
import Playlist from "../models/Playlist";

//NEW Playlist
export const newPlaylist = async (req: Request, res: Response) => {
  let playlist;

  try {
    playlist = new Playlist({
      picture_xl: req.body.picture_xl,
      title: req.body.title,
      user: req.body.user,
      tracklist: req.body.tracklist,
      type: req.body.type,
      creatorId: req.body.creatorId,
    });

    await playlist.save();
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Couldn't add Playlist!" });
  }
  return res.status(200).json({ message: "Successfully Updated" });
};

export const getPlaylist = async (req: Request, res: Response) => {
  let playlist;
  try {
    playlist = await Playlist.findById(req.params.id);
  } catch (error) {
    return console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Playlist Not Found!" });
  }

  return res.status(200).json(playlist);
};

export const getAllPlaylists = async (req: Request, res: Response) => {
  let playlists;
  try {
    playlists = await Playlist.find({}, "-creatorId");
  } catch (error) {
    return console.log(error);
  }

  if (!playlists) {
    return res.status(404).json({ message: "No Playlists Found!" });
  }

  return res.status(200).json(playlists);
};

export const addSongToPlaylist = async (req: Request, res: Response) => {
  const playlistId = req.body.playlistId;
  let playlist;

  try {
    playlist = await Playlist.findByIdAndUpdate(playlistId, {
      $push: { tracklist: req.body.song },
    });
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Can't add this track!" });
  }

  return res.status(200).json({ message: "Successfully Added Track!" });
};

export const removeSongFromPlaylist = async (req: Request, res: Response) => {
  const playlistId = req.body.playlistId;
  let playlist;

  try {
    playlist = await Playlist.findByIdAndUpdate(playlistId, {
      $pull: { tracklist: req.body.song },
    });
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Can't remove this track!" });
  }

  return res.status(200).json({ message: "Successfully removed Track!" });
};

export const deletePlaylist = async (req: Request, res: Response) => {
  const playlistId = req.params.id;
  let playlist;

  try {
    playlist = await Playlist.findByIdAndDelete(playlistId);
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Can't delete this playlist!" });
  }

  return res.status(200).json({ message: "Successfully Deleted Playlist!" });
};

export const getUserPlaylist = async (req: Request, res: Response) => {
  let playlists;
  try {
    playlists = await Playlist.find({ creatorId: req.params.id }, "-creatorId");
  } catch (error) {
    return console.log(error);
  }

  if (!playlists) {
    return res.status(404).json({ message: "No Playlists Found!" });
  }

  return res.status(200).json(playlists);
};
