const mongoose = require("mongoose");

const { Schema } = require("mongoose");

const skillsSchema = new Schema({
  skills_title: { type: String },
  skills_list: [{ type: String, default: null }],
});

const Modelclass = mongoose.model("skills", skillsSchema);

//Export the model
module.exports = Modelclass;
