const express = require('express');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require("cookie-session");
const passport = require("passport");
const http = require('http');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const keys = require("./config/key");

const app  = express();


//Database setup
mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected"))
.catch((err) => console.log(err));


//App setup
app.use(morgan('combined'))
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: true }));

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

router = require("./routes/authRoutes");
router(app);


//Server Setup
const PORT = process.env.PORT || 5080;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`server connect on ${PORT}`));
