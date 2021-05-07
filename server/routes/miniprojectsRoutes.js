const miniprojectscontroll = require("../controllers/miniprojectscontroll");
const miniprojectsmiddle = require("../middleware/miniprojectsmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/miniprojects", miniprojectscontroll.getallminiprojects);
  app.post("/api/miniprojects/add", miniprojectscontroll.createminiprojects);
  app.get(
    "/api/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.getbyid
  );
  app.put(
    "/api/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.editbyid
  );
  app.delete(
    "/api/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.deletebyid
  );
};
