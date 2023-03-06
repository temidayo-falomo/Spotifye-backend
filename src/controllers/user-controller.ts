import User from "../models/User";
import { Request, Response, NextFunction } from "express";

//GET ALL CURRENT USERS USING
export const getAllUsers = async (req: Request, res: Response) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    return console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "Users Not Found!" });
  }

  return res.status(200).json({ users });
};

//NEW USER
export const newUser = async (req: Request, res: Response) => {
  let existingUser;

  try {
    existingUser = await User.findById(req.body.userId);
  } catch (error) {
    return console.log(error);
  }

  if (existingUser) {
    return res.status(404).json({ message: "Already Logged In!" });
  }

  const user = new User({
    _id: req.body.userId,
    fullName: req.body.fullName,
    email: req.body.email,
    userAvatar: req.body.userAvatar,
    password: req.body.password,
    createdAt: req.body.createdAt,

    likedSongs: req.body.likedSongs,
    likedPlaylists: req.body.likedPlaylists,
    likedAlbums: req.body.likedAlbums,
    followedArtists: req.body.followedArtists,
  });

  try {
    user.save();
  } catch (error) {
    return console.log(error);
  }

  return res.status(200).json({ message: "Successfully Created Profile!" });
};

//GET INFO OF LOGGED IN USER
export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id;
  
  let user;

  try {
    user = await User.findById(userId, "-_id");
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong." });
  }

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  return res.status(200).json({ user });
};

//
export const likeSong = async (req: Request, res: Response) => {
  let song;
  let currentUser = req.body.userId;

  try {
    song = await User.findByIdAndUpdate(currentUser, {
      $push: { likedSongs: req.body.currentSong },
    });
  } catch (error) {
    console.log(error);
  }

  if (!song) {
    return res.status(404).json({ message: "Unable to like song" });
  }

  return res.status(200).json({ message: "Liked Song!" });
};

export const unlikeSong = async (req: Request, res: Response) => {
  let song;
  let currentUser = req.body.userId;

  try {
    song = await User.findByIdAndUpdate(currentUser, {
      $pull: { likedSongs: req.body.currentSong },
    });
  } catch (error) {
    console.log(error);
  }

  if (!song) {
    return res.status(404).json({ message: "Unable to unlike song" });
  }

  return res.status(200).json({ message: "unliked Song!" });
};

//
// // export const addPlaylist = async (req: Request, res: Response) => {
// //   let user;
// //   let currentUser = req.body.userId;

// //   try {
// //     user = await User.findByIdAndUpdate(currentUser, {
// //       $push: { user_playlists: req.body.playlist },
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }

// //   if (!user) {
// //     return res.status(404).json({ message: "Unable to add playlist" });
// //   }

// //   return res.status(200).json({ message: "Added Playlist!" });
// // };
// deprecated

//
// // export const removePlaylist = async (req: Request, res: Response) => {
// //   let user;
// //   let currentUser = req.body.userId;

// //   try {
// //     user = await User.findByIdAndUpdate(currentUser, {
// //       $pull: { user_playlists: req.body.playlist },
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }

// //   if (!user) {
// //     return res.status(404).json({ message: "Unable to remove playlist" });
// //   }

// //   return res.status(200).json({ message: "Removed Playlist!" });
// // }
// deprecated

//
export const likePlaylist = async (req: Request, res: Response) => {
  let playlist;
  let currentUser = req.body.userId;

  try {
    playlist = await User.findByIdAndUpdate(currentUser, {
      $push: { likedPlaylists: req.body.playlist },
    });
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Unable to like playlist" });
  }

  return res.status(200).json({ message: "Liked Playlist!" });
};

//
export const unlikePlaylist = async (req: Request, res: Response) => {
  let playlist;
  let currentUser = req.body.userId;

  try {
    playlist = await User.findByIdAndUpdate(currentUser, {
      $pull: { likedPlaylists: req.body.playlist },
    });
  } catch (error) {
    console.log(error);
  }

  if (!playlist) {
    return res.status(404).json({ message: "Unable to unlike playlist" });
  }

  return res.status(200).json({ message: "unliked Playlist!" });
};

//
export const followArtist = async (req: Request, res: Response) => {
  let artist;
  let currentUser = req.body.userId;

  try {
    artist = await User.findByIdAndUpdate(currentUser, {
      $push: { followedArtists: req.body.artist },
    });
  } catch (error) {
    console.log(error);
  }

  if (!artist) {
    return res.status(404).json({ message: "Unable to follow artist" });
  }

  return res.status(200).json({ message: "Followed Artist!" });
};

//
export const unfollowArtist = async (req: Request, res: Response) => {
  let artist;
  let currentUser = req.body.userId;

  try {
    artist = await User.findByIdAndUpdate(currentUser, {
      $pull: { followedArtists: req.body.artist },
    });
  } catch (error) {
    console.log(error);
  }

  if (!artist) {
    return res.status(404).json({ message: "Unable to unfollow artist" });
  }

  return res.status(200).json({ message: "Unfollowed Artist!" });
};
