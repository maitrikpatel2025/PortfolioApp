const Meeting = require("../models/meeting");

exports.getallMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.find();
    res.status(201).json(meeting);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createMeeting = async (req, res) => {
  const meeting = new Meeting({
    meet_name: req.body.meet_name,
    meet_email: req.body.meet_email,
    meet_message: req.body.meet_message,
    meet_date: req.body.meet_date,
  });
  try {
    const newMeeting = await meeting.save();
    res.status(201).json(newMeeting);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.meeting);
};

exports.editbyid = async (req, res) => {
  if (req.body.meet_name != null) {
    res.meeting.meet_name = req.body.meet_name;
    res.meeting.meet_email = req.body.meet_email;
    res.meeting.meet_date = req.body.meet_date;
  }
  try {
    const updatemeeting = await res.meeting.save();
    res.json(updatemeeting);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.detetebyid = async (req, res) => {
  try {
    await res.meeting.remove();
    res.status(200).json({ message: "delete" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
