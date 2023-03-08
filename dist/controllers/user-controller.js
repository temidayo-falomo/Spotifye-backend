"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowArtist = exports.followArtist = exports.unlikePlaylist = exports.likePlaylist = exports.unlikeSong = exports.likeSong = exports.getUser = exports.newUser = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
//GET ALL CURRENT USERS USING
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users;
    try {
        users = yield User_1.default.find();
    }
    catch (error) {
        return console.log(error);
    }
    if (!users) {
        return res.status(404).json({ message: "Users Not Found!" });
    }
    return res.status(200).json({ users });
});
exports.getAllUsers = getAllUsers;
//NEW USER
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let existingUser;
    try {
        existingUser = yield User_1.default.findById(req.body.userId);
    }
    catch (error) {
        return console.log(error);
    }
    if (existingUser) {
        return res.status(404).json({ message: "Already Logged In!" });
    }
    const user = new User_1.default({
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
    }
    catch (error) {
        return console.log(error);
    }
    return res.status(200).json({ message: "Successfully Created Profile!" });
});
exports.newUser = newUser;
//GET INFO OF LOGGED IN USER
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    let user;
    try {
        user = yield User_1.default.findById(userId, "-_id");
    }
    catch (error) {
        return res.status(404).json({ message: "Something went wrong." });
    }
    if (!user) {
        return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ user });
});
exports.getUser = getUser;
//
const likeSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let song;
    let currentUser = req.body.userId;
    try {
        song = yield User_1.default.findByIdAndUpdate(currentUser, {
            $push: { likedSongs: req.body.currentSong },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!song) {
        return res.status(404).json({ message: "Unable to like song" });
    }
    return res.status(200).json({ message: "Liked Song!" });
});
exports.likeSong = likeSong;
const unlikeSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let song;
    let currentUser = req.body.userId;
    try {
        song = yield User_1.default.findByIdAndUpdate(currentUser, {
            $pull: { likedSongs: req.body.currentSong },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!song) {
        return res.status(404).json({ message: "Unable to unlike song" });
    }
    return res.status(200).json({ message: "unliked Song!" });
});
exports.unlikeSong = unlikeSong;
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
const likePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlist;
    let currentUser = req.body.userId;
    try {
        playlist = yield User_1.default.findByIdAndUpdate(currentUser, {
            $push: { likedPlaylists: req.body.playlist },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Unable to like playlist" });
    }
    return res.status(200).json({ message: "Liked Playlist!" });
});
exports.likePlaylist = likePlaylist;
//
const unlikePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlist;
    let currentUser = req.body.userId;
    try {
        playlist = yield User_1.default.findByIdAndUpdate(currentUser, {
            $pull: { likedPlaylists: req.body.playlist },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Unable to unlike playlist" });
    }
    return res.status(200).json({ message: "unliked Playlist!" });
});
exports.unlikePlaylist = unlikePlaylist;
//
const followArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let artist;
    let currentUser = req.body.userId;
    try {
        artist = yield User_1.default.findByIdAndUpdate(currentUser, {
            $push: { followedArtists: req.body.artist },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!artist) {
        return res.status(404).json({ message: "Unable to follow artist" });
    }
    return res.status(200).json({ message: "Followed Artist!" });
});
exports.followArtist = followArtist;
//
const unfollowArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let artist;
    let currentUser = req.body.userId;
    try {
        artist = yield User_1.default.findByIdAndUpdate(currentUser, {
            $pull: { followedArtists: req.body.artist },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!artist) {
        return res.status(404).json({ message: "Unable to unfollow artist" });
    }
    return res.status(200).json({ message: "Unfollowed Artist!" });
});
exports.unfollowArtist = unfollowArtist;
//# sourceMappingURL=user-controller.js.map