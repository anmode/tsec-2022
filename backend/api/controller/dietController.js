
const Diet=require('../model/diet')
var now=new Date().toLocaleDateString()

exports.addDiet=async(req,res,next)=>{

var {food_diet}=req.body
const addDiet = new Diet({
    food_diet:food_diet,
    diet_date:now
})
const addedDite = await addDiet.save();
res.status(200).send("Diet added successfully!!!")

}

exports.getTodayDiet=async(req,res,next)=>{
    var getAllDiet=await Diet.find({diet_date:now})
    res.status(200).send({
        status: 200,
        data: getAllDiet
    })

}