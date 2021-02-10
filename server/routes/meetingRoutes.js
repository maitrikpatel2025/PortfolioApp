const meetingcontroll = require("../controllers/meetingcontroll");
const meetingmiddle = require("../middleware/meetingmiddle");

// if you want to authenticate routes
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
  app.get("/meeting", meetingcontroll.getallMeeting);
  app.post("/meeting/add", meetingcontroll.createMeeting);
  app.get("/meeting/:id", meetingmiddle.getMeeting, meetingcontroll.getbyid);
  app.put("/meeting/:id", meetingmiddle.getMeeting, meetingcontroll.editbyid);
  app.delete(
    "/meeting/:id",
    meetingmiddle.getMeeting,
    meetingcontroll.detetebyid
  );
};
