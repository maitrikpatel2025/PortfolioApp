const VoluteerExperience = require("../models/voluteerexperince");

exports.getsallVoluteerExpericence = async (req, res) => {
  try {
    const voluteerexperience = await VoluteerExperience.find();
    res.status(201).json(voluteerexperience);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createVoluteerExperience = async (req, res) => {
  const voluteerexperience = new VoluteerExperience({
    comp_name: req.body.comp_name,
    comp_position: req.body.comp_position,
    comp_duration: req.body.comp_duration,
    comp_start_date: req.body.comp_start_date,
    comp_end_date: req.body.comp_end_date,
  });
  try {
    const newvoluteerexperience = await voluteerexperience.save();
    res.status(200).json(newvoluteerexperience);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.voluteerexperience);
};

exports.editbyid = async (req, res) => {
  if (req.body.comp_name != null) {
    res.voluteerexperience.comp_name = req.body.comp_name;
    res.voluteerexperience.comp_position = req.body.comp_position;
    res.voluteerexperience.comp_duration = req.body.comp_duration;
    res.voluteerexperience.comp_start_date = req.body.comp_start_date;
    res.voluteerexperience.comp_end_date = req.body.comp_end_date;
  }
  try {
    const updatedvoluteerexperience = await res.voluteerexperience.save();
    res.status(200).json(updatedvoluteerexperience);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.status(200).voluteerexperience.remove();
    res.status(200).json({ message: "delete" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
