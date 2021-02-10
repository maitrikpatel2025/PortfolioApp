const Certification = require("../models/certification");

exports.getallcertification = async (req, res) => {
  try {
    const certification = await Certification.find();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.createcertification = async (req, res) => {
  const certification = new Certification({
    cert_image_logo: req.file.cert_image_logo,
    cert_name: req.body.cert_name,
    name_link: req.body.name_link,
    institute: req.body.institute,
    institute_link: req.body,
    institute_link,
    receive_date: req.body.receive_date,
  });
  try {
    const newcertification = await certification.save();
    res.status(200).json(newcertification);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getbyid = async (req, res) => {
  res.status(201).json(res.certification);
};

exports.editbyid = async (req, res) => {
  if (req.body.cert_name != null) {
    res.certification.cert_name = req.body.cert_name;
    res.certification.cert_image_logo = req.file.cert_image_logo;
    res.certification.institute = req.body.institute;
    res.certification.institute_link = req.body.institute;
    res.certification.receive_date = req.body.receive_date;
  }
  try {
    const updatedcertification = await res.certification.save();
    res.status(200).json(updatedcertification);
  } catch (error) {
    res, status(400).json({ message: error.message });
  }
};

exports.deletebyid = async (req, res) => {
  try {
    await res.status(200).certification.remove();
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};
