const Experience = require("../models/experience");

exports.getallexperience = async (req, res) => {
  try {
    const exprericence = await Experience.find();
    res.status(201).json(exprericence);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createexperience = async (req, res) => {
  const experience = new Experience({
    comp_name: req.body.comp_name,
    comp_position: req.body.comp_position,
    comp_job_description: req.body.comp_job_description,
    comp_duration: req.body.comp_duration,
    comp_start_date: req.body.comp_start_date,
    comp_end_date: req.body.comp_end_date,
  });
  try {
    const newexpreience = await experience.save();
    res.status(200).json(newexpreience);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.experience);
};

exports.editbyid = async (req, res) => {
  if (req.body.comp_name != null) {
    (res.experience.comp_name = req.body.comp_name),
    (res.experience.comp_position = req.body.comp_position),
    (res.experience.comp_job_description = req.body.comp_job_description),
    (res.experience.comp_duration = req.body.comp_duration),
      (res.experience.comp_start_date = req.body.comp_start_date),
      (res.experience.comp_end_date = req.body.comp_end_date);
  }
  try {
    const updatedexperience = await res.experience.save();
    res.status(200).json(updatedexperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.status(200).experience.remove();
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
