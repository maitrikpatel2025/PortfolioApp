const miniprojectscontroll = require("../controllers/miniprojectscontroll");
const miniprojectsmiddle = require("../middleware/miniprojectsmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/miniprojects", miniprojectscontroll.getallminiprojects);
  app.post("/miniprojects/add", miniprojectscontroll.createminiprojects);
  app.get(
    "/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.getbyid
  );
  app.put(
    "/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.editbyid
  );
  app.delete(
    "/miniprojects/:id",
    miniprojectsmiddle.getMiniproject,
    miniprojectscontroll.deletebyid
  );
};
