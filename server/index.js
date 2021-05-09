const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const path = require("path");
const passport = require("passport");
const http = require("http");
const mongoose = require("mongoose");
const morgan = require("morgan");

const keys = require("./config/key");

//App setup
const app = express();

//Database setup
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Database connected"))
  .catch((err) => console.log(err));

app.use(passport.initialize());
app.use(passport.session());

//middleware
app.use(morgan("combined"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use("./server/images", express.static(path.join(__dirname, "images")));

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiekey],
  })
);


//App routes

require("./routes/authRoutes")(app);
require("./routes/projectsRoutes")(app);
require("./routes/skillsRoutes")(app);
require("./routes/miniprojectsRoutes")(app);
require("./routes/voluteerexperince")(app);
require("./routes/meetingRoutes")(app);
require("./routes/contactRoutes")(app);
require("./routes/experinceRoutes")(app);
require("./routes/certificationRoutes")(app);
require("./routes/testimonialRoutes")(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Server Setup

const PORT = process.env.PORT || 5080;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server connect on ${PORT}`));
