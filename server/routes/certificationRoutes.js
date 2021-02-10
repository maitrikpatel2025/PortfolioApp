const certificationcontroll = require("../controllers/certificationcontroll");
const certificationmiddle = require("../middleware/certificationmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/certification", certificationcontroll.getallcertification);
  app.post("/certification/add", certificationcontroll.createcertification);
  app.get(
    "/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.getbyid
  );
  app.put(
    "/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.editbyid
  );
  app.delete(
    "/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.deletebyid
  );
};
