const projectscontroll = require("../controllers/projectscontroll");
const projectsmiddle = require("../middleware/projectsmiddle");


// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/project", projectscontroll.getallprojects);
  app.post(
    "/project/add",
    projectscontroll.createprojects
  );
  app.get("/project/:id", projectsmiddle.getProject, projectscontroll.getbyid);
  app.put(
    "/project/:id",
    projectsmiddle.getProject,
    projectscontroll.editbyid
  );
  app.delete(
    "/project/:id",
    projectsmiddle.getProject,
    projectscontroll.deletebyid
  );
};
