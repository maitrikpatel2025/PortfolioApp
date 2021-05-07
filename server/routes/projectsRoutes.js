const projectscontroll = require("../controllers/projectscontroll");
const projectsmiddle = require("../middleware/projectsmiddle");


// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/project", projectscontroll.getallprojects);
  app.post(
    "/api/project/add",
    projectscontroll.createprojects
  );
  app.get("/api/project/:id", projectsmiddle.getProject, projectscontroll.getbyid);
  app.put(
    "/api/project/:id",
    projectsmiddle.getProject,
    projectscontroll.editbyid
  );
  app.delete(
    "/api/project/:id",
    projectsmiddle.getProject,
    projectscontroll.deletebyid
  );
};
