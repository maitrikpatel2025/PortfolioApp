const VoluteerExperience = require("../models/voluteerexperince");

exports.getVoluteerExperience = async (req, res, next) => {
  let voluteerexperience;
  try {
    voluteerexperience = await VoluteerExperience.findById(req.params.id);
    if (voluteerexperience == null) {
      return res
        .status(400)
        .json({ message: "Cannot find voluteer experience" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.voluteerexperience = voluteerexperience;
  next();
};
