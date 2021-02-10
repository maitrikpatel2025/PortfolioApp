const Contacts = require("../models/contact");

exports.getallcontact = async (req, res) => {
  try {
    const contact = await Contacts.find();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createcontact = async (req, res) => {
  const contact = new Contact({
    cont_name: req.body.cost_name,
    cont_email: req.body.cost_email,
    cont_message: req.body.cont_message,
    cont_date: req.body.cont_date,
  });
  try {
    const newContant = await res.contact.save();
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
    res.contact.cont_name = req.contact.cont_name;
    res.contact.cont_email = req.contact.cont_email;
    res.contact.cont_date = req.contact.cont_date;
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
    await res.contact.remove();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
