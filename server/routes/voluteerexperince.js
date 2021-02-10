const voluteerexpericencecontroll = require("../controllers/voluteerexpericencecontroll");
const voluteerexpericencemiddle = require("../middleware/voluteerexpericencemiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get(
    "/voluteerexpericence",
    voluteerexpericencecontroll.getsallVoluteerExpericence
  );
  app.post(
    "/voluteerexpericence/add",
    voluteerexpericencecontroll.createVoluteerExperience
  );
  app.get(
    "/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.getbyid
  );
  app.put(
    "/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.editbyid
  );
  app.delete(
    "/voluteerexpericence/:id",
    voluteerexpericencemiddle.getVoluteerExperience,
    voluteerexpericencecontroll.deletebyid
  );
};
