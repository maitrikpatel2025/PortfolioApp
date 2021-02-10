const expericencecontroll = require("../controllers/expericencecontroll");
const expericencemiddle = require("../middleware/expericencemiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/expericence", expericencecontroll.getallExperience);
  app.post("/expericence/add", expericencecontroll.createExperience);
  app.get(
    "/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.getbyid
  );
  app.put(
    "/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.editbyid
  );
  app.delete(
    "/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.deletebyid
  );
};
