const Skills = require("../models/skills");

exports.getSkills = async (req, res, next) => {
  let skills;
  try {
    skills = await Skills.findById(req.params.id);
    if (skills == null) {
      return res.status(400).json({ message: "Cannot find skills" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.skills = skills;
  next();
};
