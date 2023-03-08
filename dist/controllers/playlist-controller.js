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
        while (_) try {
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
exports.getUserPlaylist = exports.deletePlaylist = exports.removeSongFromPlaylist = exports.addSongToPlaylist = exports.getAllPlaylists = exports.getPlaylist = exports.newPlaylist = void 0;
var Playlist_1 = __importDefault(require("../models/Playlist"));
//NEW Playlist
var newPlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                playlist = new Playlist_1.default({
                    picture_xl: req.body.picture_xl,
                    title: req.body.title,
                    user: req.body.user,
                    tracklist: req.body.tracklist,
                    type: req.body.type,
                    creatorId: req.body.creatorId,
                });
                return [4 /*yield*/, playlist.save()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Couldn't add Playlist!" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfully Updated" })];
        }
    });
}); };
exports.newPlaylist = newPlaylist;
var getPlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Playlist_1.default.findById(req.params.id)];
            case 1:
                playlist = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, console.log(error_2)];
            case 3:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Playlist Not Found!" })];
                }
                return [2 /*return*/, res.status(200).json(playlist)];
        }
    });
}); };
exports.getPlaylist = getPlaylist;
var getAllPlaylists = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlists, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Playlist_1.default.find({}, "-creatorId")];
            case 1:
                playlists = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, console.log(error_3)];
            case 3:
                if (!playlists) {
                    return [2 /*return*/, res.status(404).json({ message: "No Playlists Found!" })];
                }
                return [2 /*return*/, res.status(200).json(playlists)];
        }
    });
}); };
exports.getAllPlaylists = getAllPlaylists;
var addSongToPlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlistId, playlist, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playlistId = req.body.playlistId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Playlist_1.default.findByIdAndUpdate(playlistId, {
                        $push: { tracklist: req.body.song },
                    })];
            case 2:
                playlist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Can't add this track!" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfully Added Track!" })];
        }
    });
}); };
exports.addSongToPlaylist = addSongToPlaylist;
var removeSongFromPlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlistId, playlist, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playlistId = req.body.playlistId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Playlist_1.default.findByIdAndUpdate(playlistId, {
                        $pull: { tracklist: req.body.song },
                    })];
            case 2:
                playlist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 4];
            case 4:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Can't remove this track!" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfully removed Track!" })];
        }
    });
}); };
exports.removeSongFromPlaylist = removeSongFromPlaylist;
var deletePlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlistId, playlist, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playlistId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Playlist_1.default.findByIdAndDelete(playlistId)];
            case 2:
                playlist = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 4];
            case 4:
                if (!playlist) {
                    return [2 /*return*/, res.status(404).json({ message: "Can't delete this playlist!" })];
                }
                return [2 /*return*/, res.status(200).json({ message: "Successfully Deleted Playlist!" })];
        }
    });
}); };
exports.deletePlaylist = deletePlaylist;
var getUserPlaylist = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playlists, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Playlist_1.default.find({ creatorId: req.params.id }, "-creatorId")];
            case 1:
                playlists = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                return [2 /*return*/, console.log(error_7)];
            case 3:
                if (!playlists) {
                    return [2 /*return*/, res.status(404).json({ message: "No Playlists Found!" })];
                }
                return [2 /*return*/, res.status(200).json(playlists)];
        }
    });
}); };
exports.getUserPlaylist = getUserPlaylist;
