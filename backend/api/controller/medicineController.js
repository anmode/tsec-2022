var Medicine = require("../model/Medicine");

exports.addMedicine = async (req, res, next) => {
  var { title: medicineName, medicineTime, medicineDose } = req.body;

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
