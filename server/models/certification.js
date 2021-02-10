const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const certificationSchema = new Schema({
  cert_name: {
    type: String,
  },
  name_link: {
    type: String,
    default: null,
  },
  institute: {
    type: String,
    default: null,
  },
  institute_link: {
    type: String,
    default: null,
  },
  receive_date: { type: Date },
});

const Modelclass = mongoose.model("certifacation", certificationSchema);

module.exports = Modelclass;
