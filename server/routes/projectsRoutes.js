const projectscontroll = require("../controllers/projectscontroll");
const projectsmiddle = require("../middleware/projectsmiddle");
const imageuploadmiddle = require("../middleware/imageuploadmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/project", projectscontroll.getallprojects);
  app.post(
    "/project/add",
    imageuploadmiddle.upload.single("image"),
    projectscontroll.createprojects
  );
  app.get("/project/:id", projectsmiddle.getProject, projectscontroll.getbyid);
  app.put(
    "/project/:id",
    projectsmiddle.getProject,
    imageuploadmiddle.upload.single("image"),
    projectscontroll.editbyid
  );
  app.delete(
    "/project/:id",
    projectsmiddle.getProject,
    projectscontroll.deletebyid
  );
};
