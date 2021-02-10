const contactcontroll = require("../controllers/contactcontroll");
const contactmiddle = require("../middleware/contactmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/contact", contactcontroll.getallContact);
  app.post("/contact/add", contactcontroll.createContact);
  app.get("/contact/:id", contactmiddle.getContact, contactcontroll.getbyid);
  app.put("/contact/:id", contactmiddle.getContact, contactcontroll.editbyid);
  app.delete(
    "/contact/:id",
    contactmiddle.getContact,
    contactcontroll.detetebyid
  );
};
