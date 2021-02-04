const mongoose = require("mongoose ");
const { Schema } = require("mongoose");

const meetingSchema = new Schema({
  meet_name: {
    type: String,
  },
  meet_email: {
    type: String,
  },
  meet_message: {
    type: String,
  },
  meet_date: {
    type: Date,
    default: Date.now,
  },
});

Modelclass = mongoose.model("meeting", meetingSchema);

module.exports = Modelclass;
