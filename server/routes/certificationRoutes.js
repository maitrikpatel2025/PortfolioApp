const certificationcontroll = require("../controllers/certificationcontroll");
const certificationmiddle = require("../middleware/certificationmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/certification", certificationcontroll.getallcertification);
  app.post("api/certification/add", certificationcontroll.createcertification);
  app.get(
    "/api/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.getbyid
  );
  app.put(
    "/api/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.editbyid
  );
  app.delete(
    "/api/certification/:id",
    certificationmiddle.getCertification,
    certificationcontroll.deletebyid
  );
};
