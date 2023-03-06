import mongoose from "mongoose";

//SCHEMA FOR USER

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userAvatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likedSongs: [],
  likedPlaylists: [],
  likedAlbums: [],

  followedArtists: [],
});

export default mongoose.model("User", UserSchema);
