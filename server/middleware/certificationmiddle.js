const Certification = require("../models/certification");

exports.getCertification = async (req, res, next) => {
  let certification;
  try {
    certification = await Certification.findById(req.params.id);
    if (certification == null) {
      return res.status(400).json({ message: "Cannot find certification" });
    }
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
  res.certification = certification;
  next();
};
