const Miniproject = require("../models/miniprojects");

exports.getMiniproject = async (req, res, next) => {
  let miniproject;
  try {
    miniproject = await Miniproject.findById(req.params.id);
    if (miniproject == null) {
      return res.status(400).json({ message: "Cannot find miniproject" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.miniproject = miniproject;
  next();
};
