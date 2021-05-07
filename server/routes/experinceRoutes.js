const expericencecontroll = require("../controllers/expericencecontroll");
const expericencemiddle = require("../middleware/expericencemiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/expericence", expericencecontroll.getallExperience);
  app.post("/api/expericence/add", expericencecontroll.createExperience);
  app.get(
    "/api/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.getbyid
  );
  app.put(
    "/api/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.editbyid
  );
  app.delete(
    "/api/expericence/:id",
    expericencemiddle.getExperience,
    expericencecontroll.deletebyid
  );
};
