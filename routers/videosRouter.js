const express = require("express");
const Video = require("../models/Video");
const router = express.Router();

router.get("/", async (req, res) => {
  const videos = await Video.find({});
  res.send(videos);
});
router.get("/seed", async (req, res) => {
  await Video.deleteMany({});
  const videos = await Video.insertMany([
    {
      title: "গাবতলী গরুর হাটের চিত্র",
      video_id: "SKQARnVjFck",
      hat_name: "gabtoli",
      created_date: "2023-06-19",
    },
    {
      title: "বনরূপা গরুর হাটের চিত্র",
      video_id: "SKQARnVjFck",
      hat_name: "gabtoli",
      created_date: "2023-06-18",
    },
    {
      title: "গাবতলী গরুর হাটের চিত্র",
      video_id: "SKQARnVjFck",
      hat_name: "gabtoli",
      created_date: "2023-06-20",
    },
    {
      title: "গাবতলী গরুর হাটের চিত্র",
      video_id: "SKQARnVjFck",
      hat_name: "gabtoli",
      created_date: "2023-06-17",
    },
  ]);
  res.json(201, { videos });
});

router.post("/", async (req, res) => {});
module.exports = router;
