var express = require("express");
var router = express.Router();

const info = {
  userName: process.env.USERNAME,
  hostName: process.env.HOSTNAME,
  cores: process.env.NUMBER_OF_PROCESSORS,
  os: process.env.OS,
  arch: process.arch,
  platform: process.platform,
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hacking System", info: info });
});

module.exports = router;
