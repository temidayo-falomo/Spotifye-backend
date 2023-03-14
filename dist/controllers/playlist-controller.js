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
exports.getUserPlaylist = exports.editPlaylistName = exports.deletePlaylist = exports.removeSongFromPlaylist = exports.addSongToPlaylist = exports.getAllPlaylists = exports.getPlaylist = exports.newPlaylist = void 0;
const Playlist_1 = __importDefault(require("../models/Playlist"));
//NEW Playlist
const newPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlist;
    try {
        playlist = new Playlist_1.default({
            picture_xl: req.body.picture_xl,
            title: req.body.title,
            user: req.body.user,
            tracklist: req.body.tracklist,
            type: req.body.type,
            creatorId: req.body.creatorId,
        });
        yield playlist.save();
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Couldn't add Playlist!" });
    }
    return res.status(200).json({ message: "Successfully Updated" });
});
exports.newPlaylist = newPlaylist;
const getPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlist;
    try {
        playlist = yield Playlist_1.default.findById(req.params.id);
    }
    catch (error) {
        return console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Playlist Not Found!" });
    }
    return res.status(200).json(playlist);
});
exports.getPlaylist = getPlaylist;
const getAllPlaylists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlists;
    try {
        playlists = yield Playlist_1.default.find({}, "-creatorId");
    }
    catch (error) {
        return console.log(error);
    }
    if (!playlists) {
        return res.status(404).json({ message: "No Playlists Found!" });
    }
    return res.status(200).json(playlists);
});
exports.getAllPlaylists = getAllPlaylists;
const addSongToPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playlistId = req.body.playlistId;
    let playlist;
    try {
        playlist = yield Playlist_1.default.findByIdAndUpdate(playlistId, {
            $push: { tracklist: req.body.song },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Can't add this track!" });
    }
    return res.status(200).json({ message: "Successfully Added Track!" });
});
exports.addSongToPlaylist = addSongToPlaylist;
const removeSongFromPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playlistId = req.body.playlistId;
    let playlist;
    try {
        playlist = yield Playlist_1.default.findByIdAndUpdate(playlistId, {
            $pull: { tracklist: req.body.song },
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Can't remove this track!" });
    }
    return res.status(200).json({ message: "Successfully removed Track!" });
});
exports.removeSongFromPlaylist = removeSongFromPlaylist;
const deletePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playlistId = req.params.id;
    let playlist;
    try {
        playlist = yield Playlist_1.default.findByIdAndDelete(playlistId);
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Can't delete this playlist!" });
    }
    return res.status(200).json({ message: "Successfully Deleted Playlist!" });
});
exports.deletePlaylist = deletePlaylist;
const editPlaylistName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playlistId = req.body.playlistId;
    let playlist;
    try {
        playlist = yield Playlist_1.default.findByIdAndUpdate(playlistId, {
            title: req.body.title,
        });
    }
    catch (error) {
        console.log(error);
    }
    if (!playlist) {
        return res.status(404).json({ message: "Can't edit this playlist!" });
    }
    return res.status(200).json({ message: "Successfully Edited Playlist!" });
});
exports.editPlaylistName = editPlaylistName;
const getUserPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let playlists;
    try {
        playlists = yield Playlist_1.default.find({ creatorId: req.params.id }, "-creatorId");
    }
    catch (error) {
        return console.log(error);
    }
    if (!playlists) {
        return res.status(404).json({ message: "No Playlists Found!" });
    }
    return res.status(200).json(playlists);
});
exports.getUserPlaylist = getUserPlaylist;
//# sourceMappingURL=playlist-controller.js.map