const contactcontroll = require("../controllers/contactcontroll");
const contactmiddle = require("../middleware/contactmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/contact", contactcontroll.getallContact);
  app.post("/api/contact/add", contactcontroll.createContact);
  app.get("/api/contact/:id", contactmiddle.getContact, contactcontroll.getbyid);
  app.put("/api/contact/:id", contactmiddle.getContact, contactcontroll.editbyid);
  app.delete(
    "/api/contact/:id",
    contactmiddle.getContact,
    contactcontroll.detetebyid
  );
};
