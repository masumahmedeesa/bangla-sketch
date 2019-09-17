const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { Client } = require('pg');
const { DATABASE_URL } = process.env;

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

app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));

app.use("/admin",adminPagesRoute);
app.use(homePagesRoute);
app.use(profileRoute);
app.use(researchRoute);
app.use(apiControl);

app.use(errorControl.getError);

// app.listen(3000);

var port = process.env.PORT || 3000;

app = http.createServer((req, res) => {
  const client = new Client({
    connectionString: DATABASE_URL,
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  client.connect()
    .then((result) => {
      // client.end();
      console.log('success');
    })
    .catch(() => {
      res.end('ERROR');
      client.end();
    });
});

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(port);
    // app.listen(port);
    // app.listen(process.env.PORT || 3000, function() {
    //   // console.log('Your node js server is running');
    // });
  })
  .catch(err => {
    console.log(err);
  });

// app.listen(process.env.PORT || 3000, function(){
//     // console.log('Your node js server is running');
// });
