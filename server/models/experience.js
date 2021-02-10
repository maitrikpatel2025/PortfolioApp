const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ExperienceSchema = new Schema({
  comp_name: {
    type: String,
  },
  comp_position: {
    type: String,
  },
  comp_job_description: {
    type: String,
  },
  comp_duration: {
    type: String,
    default: null,
  },
  comp_start_date: {
    type: Date,
    default: null,
  },
  comp_end_date: {
    type: Date,
    default: null,
  },
});

Modelclass = mongoose.model("Experience", ExperienceSchema);

module.exports = Modelclass;
