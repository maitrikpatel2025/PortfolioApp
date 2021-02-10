const skillscontroll = require("../controllers/skillscontroll");
const skillsmiddle = require("../middleware/skillsmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/skills", skillscontroll.getallskills);
  app.post("/skills/add", skillscontroll.createskills);
  app.get("/skills/:id", skillsmiddle.getSkills, skillscontroll.getbyid);
  app.put("/skills/:id", skillsmiddle.getSkills, skillscontroll.editbyid);
  app.delete("/skills/:id", skillsmiddle.getSkills, skillscontroll.deletebyid);
};
