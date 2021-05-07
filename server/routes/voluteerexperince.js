const voluteerexpericencecontroll = require("../controllers/voluteerexpericencecontroll");
const voluteerexpericencemiddle = require("../middleware/voluteerexpericencemiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get(
    "/api/voluteerexpericence",
    voluteerexpericencecontroll.getsallVoluteerExpericence
  );
  app.post(
    "/api/voluteerexpericence/add",
    voluteerexpericencecontroll.createVoluteerExperience
  );
  app.get(
    "/api/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.getbyid
  );
  app.put(
    "/api/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.editbyid
  );
  app.delete(
    "/api/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.deletebyid
  );
};
