const mongoose = require('mongoose');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const CareTaker = require('../model/careTaker');

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, contact, password } = req.body

        const userExist = await CareTaker.findOne({ email: email });

        if (userExist) {
            res.status(200).send({ status: 400, message: "User already exist!!!" });
            return;
        }

        const createNewCareTaker = new CareTaker({
            name: name,
            email: email,
            contact: contact,
            password: password,
        })
        const careTaker = await createNewCareTaker.save();
        res.status(200).send({ status: 200, message: "User Registered Successfully" });
        return;
    } catch (error) {
        next(error)
    }
}