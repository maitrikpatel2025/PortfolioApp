const testimonialcontroll = require("../controllers/testimonialcontroll");
const testimonialmiddle = require("../middleware/testimonialmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/testimonial", testimonialcontroll.getallTestimonial);
  app.post("/testimonial/add", testimonialcontroll.createTestimonial);
  app.get("/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.getbyid);
  app.put("/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.editbyid);
  app.delete("/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.detetebyid);
};
