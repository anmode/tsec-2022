const Appointment = require('../model/appointment')

exports.bookAppointment = async (req,res,next) => {
    try {
        const { careTakerId, name, specialization, hospitalName, location, date, time } = req.body;
        const bookAppointment = new Appointment({
        careTakerId: careTakerId,
        name: name,
        specialization: specialization,
        hospitalName: hospitalName,
        location: location,
        date: date,
        time: time,
        status: '0',
    })

    const bookStatus = await bookAppointment.save();
    res.status(200).send({ status:200, message: 'Appointment Successfully Send to Doctor'});
    } catch (error) {
        next(error);
    }
}