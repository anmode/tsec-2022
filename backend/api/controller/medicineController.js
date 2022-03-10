var Medicine = require("../model/Medicine");

exports.addMedicine = async (req, res, next) => {
  var { title: medicineName, medicineTime, medicineDose } = req.body;
  console.log("files are");
  console.log(req.file.path);
  var addMedicine = new Medicine({
    medicine_name: medicineName,
    medicine_time: medicineTime,
    dose: medicineDose,
    img: req.file.path,
  });
  var addedMedicine = await addMedicine.save();
  res.status(200).send("Medicine added successfully");
};
exports.deleteMedicine = async (req, res, next) => {
  var { medicineID } = req.body;
  var findingAndDeletingMadicine = Medicine.findOneAndDelete({
    _id: medicineID,
  });
  findingAndDeletingMadicine.exec((err, singleData) => {
    try {
      fs.unlinkSync(singleData["category_img"], function (err) {
        console.log("file deleted successfully");
      });
    } catch {
      console.log("This error raised from file uploader");
    }
  });
  res.status(200).send({ catMsg: "Madicine deleted Successfully!!!" });

  console.log(req.body);
  var addMedicine = new Medicine({
    food_diet: medicineName,
    medicineTime: medicineTime,
    dose: medicineDose,
  });
  var addedMedicine = await addMedicine.save();
  res.status(200).send("Medicine added successfully");
};
exports.deleteMedicine = (req, res, next) => {
  var { medicineID } = req.body;
};
