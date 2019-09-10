const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const homePagesRoute = require("./routes/homeRoutes");
const adminPagesRoute = require("./routes/adminRoutes");
const profileRoute = require('./routes/profileRoutes');
const researchRoute = require('./routes/researchRoutes.js');
const errorControl = require("./controllers/errorController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminPagesRoute);
app.use(homePagesRoute);
app.use(profileRoute);
app.use(researchRoute);

app.use(errorControl.getError);

// app.listen(3000);

app.listen(process.env.PORT || 3000, function(){
    // console.log('Your node js server is running');
});
