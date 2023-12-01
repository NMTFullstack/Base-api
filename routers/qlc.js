var express = require("express");
var router = express.Router();
var upload_video = require("./upload-video/upload");

router.use("/upload_video", upload_video);
module.exports = router;
