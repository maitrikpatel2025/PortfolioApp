const Meeting = require("../models/meeting");

exports.getMeeting = async (req, res, next) => {
  let meeting;
  try {
    meeting = await Meeting.findById(req.params.id);
    if (meeting == null) {
      return res.status(400).json({ message: "Cannot find meeting" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.meeting = meeting;
  next();
};
