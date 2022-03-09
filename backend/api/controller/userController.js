const mongoose = require('mongoose');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const Gallery = require('../model/Gallery');
const User = require('../model/User');

exports.loginUser = async(req,res,next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email })
        if (user == null) {
            res.status(200).send({ status: 400, message: "Invalid Username or Password" })
        } else {
            if (email == user.email && password == user.password) {
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


