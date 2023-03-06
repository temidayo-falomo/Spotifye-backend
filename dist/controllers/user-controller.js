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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollowArtist = exports.followArtist = exports.unlikePlaylist = exports.likePlaylist = exports.unlikeSong = exports.likeSong = exports.getUser = exports.newUser = exports.getAllUsers = void 0;
var User_1 = __importDefault(require("../models/User"));
//GET ALL CURRENT USERS USING
var getAllUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.default.find()];
            case 1:
                users = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, console.log(error_1)];
            case 3:
                if (!users) {
                    return [2 /*return*/, res.status(404).json({ message: "Users Not Found!" })];
                }
                return [2 /*return*/, res.status(200).json({ users: users })];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
//NEW USER
var newUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, error_2, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User_1.default.findById(req.body.userId)];
            case 1:
                existingUser = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, console.log(error_2)];
            case 3:
                if (existingUser) {
                    return [2 /*return*/, res.status(404).json({ message: "Already Logged In!" })];
                }
                user = new User_1.default({
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
                    return [2 /*return*/, console.log(error)];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfully Created Profile!" })];
        }
    });
}); };
exports.newUser = newUser;
//GET INFO OF LOGGED IN USER
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findById(userId, "-_id")];
            case 2:
                user = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                return [2 /*return*/, res.status(404).json({ message: "Something went wrong." })];
            case 4:
                if (!user) {
                    return [2 /*return*/, res.status(404).json({ message: "User Not Found" })];
                }
                return [2 /*return*/, res.status(200).json({ user: user })];
        }
    });
}); };
exports.getUser = getUser;
//
var likeSong = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var song, currentUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { likedSongs: req.body.currentSong },
                    })];
            case 2:
                song = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4:
                if (!song) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to like song" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Liked Song!" })];
        }
    });
}); };
exports.likeSong = likeSong;
var unlikeSong = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var song, currentUser, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { likedSongs: req.body.currentSong },
                    })];
            case 2:
                song = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4:
                if (!song) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to unlike song" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "unliked Song!" })];
        }
    });
}); };
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
var likePlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, currentUser, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { likedPlaylists: req.body.playlist },
                    })];
            case 2:
                playlist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 4];
            case 4:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to like playlist" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Liked Playlist!" })];
        }
    });
}); };
exports.likePlaylist = likePlaylist;
//
var unlikePlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, currentUser, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { likedPlaylists: req.body.playlist },
                    })];
            case 2:
                playlist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_7 = _a.sent();
                console.log(error_7);
                return [3 /*break*/, 4];
            case 4:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to unlike playlist" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "unliked Playlist!" })];
        }
    });
}); };
exports.unlikePlaylist = unlikePlaylist;
//
var followArtist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var artist, currentUser, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $push: { followedArtists: req.body.artist },
                    })];
            case 2:
                artist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                console.log(error_8);
                return [3 /*break*/, 4];
            case 4:
                if (!artist) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to follow artist" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Followed Artist!" })];
        }
    });
}); };
exports.followArtist = followArtist;
//
var unfollowArtist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var artist, currentUser, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentUser = req.body.userId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User_1.default.findByIdAndUpdate(currentUser, {
                        $pull: { followedArtists: req.body.artist },
                    })];
            case 2:
                artist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_9 = _a.sent();
                console.log(error_9);
                return [3 /*break*/, 4];
            case 4:
                if (!artist) {
                    return [2 /*return*/, res.status(404).json({ message: "Unable to unfollow artist" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Unfollowed Artist!" })];
        }
    });
}); };
exports.unfollowArtist = unfollowArtist;
