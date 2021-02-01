const express = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./config/key");

const app  = express();

//Database setup
mongoose.connect(keys.mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("connected"))
.catch((err) => console.log(err));

app.use(express.json());

app.get('/',(req,res) => {
    res.send({hi:'there'});
});


//Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`server connect on ${PORT}`));