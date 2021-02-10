const Contact = require("../models/contact");

exports.getContact = async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(400).json({ message: "Cannot find contact" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.contact = contact;
  next();
};
