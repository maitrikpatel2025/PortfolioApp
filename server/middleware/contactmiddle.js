const contact = require("../models/certification");

exports.getContact = async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(400).json({ message: "Cannot find contact" });
    }
  } catch (error) {
    return res.status(500).json({ message: err.message });
  }
  res.contact = contact;
  next();
};
