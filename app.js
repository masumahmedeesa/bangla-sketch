const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

const homePagesRoute = require("./routes/homeRoutes");
const adminPagesRoute = require("./routes/adminRoutes");
const profileRoute = require("./routes/profileRoutes");
const researchRoute = require("./routes/researchRoutes.js");
const errorControl = require("./controllers/errorController");
const apiControl = require("./routes/apiRoutes");

const sequelize = require("./utility/database");

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "public")));

app.use("*/css", express.static("public/css"));
app.use("*/js", express.static("public/js"));
app.use("*/images", express.static("public/images"));
app.use("*/ckeditor", express.static("public/ckeditor"));

app.use("/admin", adminPagesRoute);
app.use(homePagesRoute);
app.use(profileRoute);
app.use(researchRoute);
app.use(apiControl);

app.use(errorControl.getError);

// app.listen(3000);

var port = process.env.PORT || 3000;

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });


// app.listen(port);
