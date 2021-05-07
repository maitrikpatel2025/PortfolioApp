const testimonialcontroll = require("../controllers/testimonialcontroll");
const testimonialmiddle = require("../middleware/testimonialmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/testimonial", testimonialcontroll.getallTestimonial);
  app.post("/api/testimonial/add", testimonialcontroll.createTestimonial);
  app.get("/api/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.getbyid);
  app.put("/api/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.editbyid);
  app.delete("/api/testimonial/:id", testimonialmiddle.getTestimonial, testimonialcontroll.detetebyid);
};
