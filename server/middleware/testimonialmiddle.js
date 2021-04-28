const Testimonial = require("../models/testimonial");

exports.getTestimonial = async (req, res, next) => {
  let testimonial;
  try {
    testimonial = await Testimonial.findById(req.params.id);
    if (testimonial == null) {
      return res.status(400).json({ message: "Cannot find testimonial" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.testimonial = testimonial;
  next();
};
