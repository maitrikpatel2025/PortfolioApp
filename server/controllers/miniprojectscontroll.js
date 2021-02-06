const Miniprojects = require("../models/miniprojects");

exports.getallminiprojects = async (req,res) =>{
    try {
        const miniprojects = await Miniprojects.find();
        res.status(201).json(miniprojects);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.createminiprojects = async(req,res) =>{
    const miniprojects = new Miniprojects({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
    })
    
    try{
        const newminiproject = await miniprojects.save();
        res.status(201).json(newminiproject);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}


exports.getbyid = async(req,res) => {
    res.status(400).json(res.miniproject);
}

exports.editbyid = async (req,res) => {
    if (req.body.title != null){
        res.miniproject.title = req.body.title;
        res.miniproject.description = req.body.description;
        res.miniproject.tags = req.body.tags;
    }
    try{
        const updateminiproject = await res.miniproject.save();
        res.json(updateminiproject);
    }catch(error){
        res.status(400).json({message : err.message});
    }
}

exports.deletebyid = async(req,res) =>{
    try {
        await res.miniproject.remove();
        res.status(200).json({ message: 'delete' })
    }
    catch(error){
        res.status(500).json({ message: err.message });
    }
}