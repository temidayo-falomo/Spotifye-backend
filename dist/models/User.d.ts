import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    _id: string;
    fullName: string;
    email: string;
    userAvatar: string;
    password: string;
    createdAt: Date;
    likedSongs: any[];
    likedPlaylists: any[];
    likedAlbums: any[];
    followedArtists: any[];
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    _id: string;
    fullName: string;
    email: string;
    userAvatar: string;
    password: string;
    createdAt: Date;
    likedSongs: any[];
    likedPlaylists: any[];
    likedAlbums: any[];
    followedArtists: any[];
}>>;
export default _default;
