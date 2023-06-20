const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Video title  is required."],
      trim: true,
    },
    hut: {
      type: String,
      required: [true, "Category slug is required."],
      unique: true,
    },

    youtube_embeded_link: {
      type: String,
      required: [true, "Youtube embeded link is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
