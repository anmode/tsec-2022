const mongoose = require('mongoose');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const CareTaker = require('../model/careTaker');

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, contact, password } = req.body
        if( !name || !email || !contact || !password){
            res.status(200).send({ status: 400, message: "Wrong Credentials" });
            return;
        }
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

exports.loginUser = async(req,res,next) => {
    try {
        const { email, password } = req.body
        const user = await CareTaker.findOne({ email: email })
        if (user == null) {
            res.status(200).send({ status: 400, message: "Invalid Username or Password" })
        } else {
            if (email == user.email && user.password == password) {
                res.status(200).json({
                    status: 200,
                    message: "User Login Successfully",
                    data: {
                        user: user
                    }
                })
            }
        }
    } catch (error) {
        next(error)
    }
}