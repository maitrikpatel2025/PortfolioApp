const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const path = require("path");
const passport = require("passport");
const http = require("http");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

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
app.use(cors());
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


//Server Setup

const PORT = process.env.PORT || 5080;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server connect on ${PORT}`));
