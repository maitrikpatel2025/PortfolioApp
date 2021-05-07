const meetingcontroll = require("../controllers/meetingcontroll");
const meetingmiddle = require("../middleware/meetingmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/api/meeting", meetingcontroll.getallMeeting);
  app.post("/api/meeting/add", meetingcontroll.createMeeting);
  app.get("/api/meeting/:id", meetingmiddle.getMeeting, meetingcontroll.getbyid);
  app.put("/api/meeting/:id", meetingmiddle.getMeeting, meetingcontroll.editbyid);
  app.delete(
    "/api/meeting/:id",
    meetingmiddle.getMeeting,
    meetingcontroll.detetebyid
  );
};
