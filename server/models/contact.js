const mongoose = require("mongoose");
const { Schema } = require("mongoose");


const contactSchema = new Schema({
  cont_name: {
    type: String,
  },
  cont_email: {
    type: String,
  },
  cont_message: {
    type: String,
  },
  cont_date: {
    type: Date,
    default: Date.now,
  },
});

Modelclass = mongoose.model("contact", contactSchema);

module.exports = Modelclass;
