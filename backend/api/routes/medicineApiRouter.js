const express = require("express");
const router = express.Router();
const multer = require("multer");
var path = require("path");
var fs = require("fs");
const {
  addMedicine,
  deleteMedicine,
} = require("../controller/medicineController");
var pathToCreate = "./public/images/subCategory/";
//image upload code
var Storage = multer.diskStorage({
  destination: async function (req, files, cb) {
    console.log("Files From Disk :  ");
    cb(null, pathToCreate);
  },
  filename: (req, files, cb) => {
    var catName = req.body.catName.substr(0, 10);
    cb(
      null,
      catName.replace(new RegExp(" ", "g"), "") +
        "_" +
        framingDate +
        path.extname(files.originalname)
    );
  },
});

var upload = multer({
  storage: Storage,
  fileFilter: function (req, files, callback) {
    var ext = path.extname(files.originalname);
    var extLower = ext.toLowerCase();
    if (extLower == ".jpeg" || extLower == ".png" || extLower == ".jpg") {
      callback(null, true);
    } else {
      callback(
        {
          message: "Invalid file Type. Only jpg, png and jpeg are allowed.",
        },
        false
      );
    }
  },
}).single("catLogo");

router.post("/", addMedicine);
router.get("/", deleteMedicine);

module.exports = router;
