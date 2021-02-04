const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const miniprojectsSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: [{ type: String, default: null }],
});

const Modelclass = mongoose.model("miniprojects", miniprojectsSchema);

//Export the model
module.exports = Modelclass;
