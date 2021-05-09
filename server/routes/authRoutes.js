const passport = require("passport");
const passportService = require("../services/passport");
const Authentication = require("../controllers/authentication");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  // auth routes
  app.get("/api", function (req, res) {
    res.send("Hello")
  }
  )
  app.post("/api/signin", requireSignin, Authentication.signin);
  app.post("/api/signup", Authentication.signup);
  app.get("/api/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
