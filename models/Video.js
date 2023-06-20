const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Video title  is required."],
      trim: true,
    },
    hat_name: {
      type: String,
      required: [true, "Category slug is required."],
    },

    video_id: {
      type: String,
      required: [true, "Youtube embeded link is required"],
    },
    created_date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
