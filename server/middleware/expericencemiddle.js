const Experience = require("../models/experience");

exports.getExperience = async (req, res, next) => {
  let experience;
  try {
    experience = await Experience.findById(req.params.id);
    if (experience == null) {
      return res.status(400).json({ message: "Cannot find experience" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.experience = experience;
  next();
};
