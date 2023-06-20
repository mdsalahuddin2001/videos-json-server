const express = require("express");
const Video = require("../models/Video");
const router = express.Router();

router.get("/", async (req, res) => {
  const videos = await Video.find({});
  res.send(videos);
});
router.get("/seed", async (req, res) => {
  const videos = await Video.insertMany([
    {
      title: "গাবতলী গরুর হাটের চিত্র",
      youtube_embeded_link: "https://www.youtube.com/embed/uIALwgezsLo",
      hut: "gabtoli",
      createdAt: "2023-06-01T00:00:00.000Z",
    },
    {
      title: "বনরুপা গরুর হাটের চিত্র",
      youtube_embeded_link: "https://www.youtube.com/embed/zkt968jkbbY",
      hut: "bonorupa",
      createdAt: "2023-05-01T00:00:00.000Z",
    },
    {
      title: "নয়া বাজার গরুর হাটের চিত্র",
      youtube_embeded_link: "https://www.youtube.com/embed/I5AU2V4_uA0",
      hut: "noyabajar",
      createdAt: "2023-06-01T00:00:00.000Z",
    },
    {
      title: "আফতাবনগর গরুর হাটের চিত্র",
      youtube_embeded_link: "https://www.youtube.com/embed/0RoDYGVcr38",
      hut: "aftabnagar",
      createdAt: "2023-06-01T00:00:00.000Z",
    },
  ]);
  res.json(201, { videos });
});

router.post("/", async (req, res) => {});
module.exports = router;
