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
  },
  other_details:{
    type:String,
  },
  skills: [{ type: String }],
  tech_skills_logo :[{type:String}],
  roles: [{ type: String }],
  team: [{ type: String }],
  duration: {
    type: String,
  },
  start_date:{
    type: Date, 
  },
  end_date:{
      type: Date,
  },
  image: {
    type: String,
  },
  git_link:{
    type:String,
  },
  website_link:{
    type:String,
  },
  create_On:{
    type: Date,
    default: Date.now()
  }
});

const Modelclass = mongoose.model("projects", projectsSchema);

//Export the model
module.exports = Modelclass;