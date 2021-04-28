const Contact = require("../models/contact");

exports.getallContact = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createContact = async (req, res) => {
  const contact = new Contact({
    cont_name: req.body.cont_name,
    cont_email: req.body.cont_email,
    cont_message: req.body.cont_message,
    cont_date: req.body.cont_date,
  });
  try {
    const newContant = await contact.save();
    res.status(201).json(newContant);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.contact);
};

exports.editbyid = async (req, res) => {
  if (req.body.cont_name != null) {
    res.contact.cont_name = req.body.cont_name;
    res.contact.cont_email = req.body.cont_email;
    res.contact.cont_message = req.body.cont_message;
    res.contact.cont_date = req.body.cont_date;
  }
  try {
    const updatecontact = await res.contact.save();
    res.json(updatecontact);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.detetebyid = async (req, res) => {
  try {
    await res.status(200).contact.remove();
    res.status(200).json({ message: "delete" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
