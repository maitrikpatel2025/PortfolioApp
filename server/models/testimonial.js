const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const testimonialSchema = new Schema({
  testi_name: {
    type: String,
  },
  testi_linkedin_link: {
    type: String,
    default: null,
  },
  testi_message: {
    type: String,
    default: null,
  },
  testi_profession: {
    type: String,
    default: null,
  },
  receive_date: { type: Date },
});

const Modelclass = mongoose.model("testimonial", testimonialSchema);

module.exports = Modelclass;
