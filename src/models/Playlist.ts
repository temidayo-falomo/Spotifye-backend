import mongoose from "mongoose";

//SCHEMA FOR USER

const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  picture_xl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  tracklist: [],
  type: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Playlist", PlaylistSchema);
