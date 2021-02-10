const passport = require("passport");
const passportService = require("../services/passport");
const Authentication = require("../controllers/authentication");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function (app) {
  // auth routes
  app.get("/", requireAuth, function (req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
};
