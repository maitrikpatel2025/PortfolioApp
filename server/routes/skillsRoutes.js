const skillscontroll = require("../controllers/skillscontroll");
const skillsmiddle = require("../middleware/skillsmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/skills", skillscontroll.getallskills);
  app.post("/api/skills/add", skillscontroll.createskills);
  app.get("/api/skills/:id", skillsmiddle.getSkills, skillscontroll.getbyid);
  app.put("/api/skills/:id", skillsmiddle.getSkills, skillscontroll.editbyid);
  app.delete("/api/skills/:id", skillsmiddle.getSkills, skillscontroll.deletebyid);
};
