const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const projectsSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  summary: {
    type: String,
    default: null,
  },
  other_details: {
    type: String,
    default: null,
  },
  skills: [{ type: String, default: null }],
  tech_skills_logo: [{ type: String, default: null }],
  roles: [{ type: String, default: null }],
  team: [{ type: String, default: null }],
  duration: {
    type: String,
    default: null,
  },
  start_date: {
    type: Date,
    default: null,
  },
  end_date: {
    type: Date,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  git_link: {
    type: String,
    default: null,
  },
  website_link: {
    type: String,
    default: null,
  },
  create_On: {
    type: Date,
    default: Date.now(),
  },
});

const Modelclass = mongoose.model("projects", projectsSchema);

//Export the model
module.exports = Modelclass;
