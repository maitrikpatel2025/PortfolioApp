const Skills = require("../models/skills");

exports.getallskills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(201).json(skills);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createskills = async (req, res) => {
  const skills = new Skills({
    skills_title: req.body.skills_title,
    skills_list: req.body.skills_list,
  });
  try {
    const newskills = await skills.save();
    res.status(200).json(newskills);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.skills);
};

exports.editbyid = async (req, res) => {
  if (req.body.skills_title != null) {
    res.skills.skills_title = req.body.skills_title;
    res.skills.skills_list = req.body.skills_list;
  }
  try {
    const updatedskill = await res.skills.save();
    res.status(400).json(updatedskill);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.status(200).skills.remove();
    res.status(200).json({ message: "delete" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
