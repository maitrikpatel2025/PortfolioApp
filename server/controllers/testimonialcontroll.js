const Testimonial = require("../models/testimonial");



exports.getallTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.find();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


exports.createTestimonial = async (req, res) => {
  const testimonial = new Testimonial({
    testi_name: req.body.testi_name,
    testi_linkedin_link: req.body.testi_linkedin_link,
    testi_message: req.body.testi_message,
    testi_profession: req.body.testi_profession,
    receive_date: req.body.receive_date
  });
  try {
    const newtestimonial = await testimonial.save();
    res.status(200).json(newtestimonial);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};


exports.getbyid = async (req, res) => {
  res.status(201).json(res.testimonial);
};


exports.editbyid = async (req, res) => {
  if (req.body.testi_name != null) {
    res.testimonial.testi_name = req.body.testi_name;
    res.testimonial.testi_linkedin_link = req.body.testi_linkedin_link;
    res.testimonial.testi_message = req.body.testi_message;
    res.testimonial.testi_profession = req.body.testi_profession;
    res.testimonial.receive_date = req.body.testimonial.receive_date;
  }
  try {
    const updatetestimonial = await res.testimonial.save();
    res.json(updatetestimonial);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};


exports.detetebyid = async (req, res) => {
  try {
    await res.testimonial.remove();
    res.status(200).json({ message: "delete" });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

