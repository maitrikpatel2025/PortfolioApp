const Expericence = require('../models/experience');

exports.getallexpericence = async (req,res) =>{
    try {
        const exprericence = await Expericence.find();
        res.status(201).json(exprericence);
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

exports.createexpericence = async (req,res) => {
    const experience = new Expericence({
        comp_name: req.body.comp_name,
        comp_position: req.body.comp_position,
        comp_job_description: req.body.comp_job_description,
        comp_duration:  req.body.comp_duration,
        comp_start_date: req.body.comp_start_date,
        comp_end_date: req.body.comp_end_date
    })
    try {
        const newexpreience = await Expericence.save();
        res.status(200).json(newexpreience);
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

exports.getbyid = async(req,res) =>{
    res.status(201).json(res.experience)
}

