at first..
1. npm init .. Give your Name | Credentials | Description at package.json
{add "start" : "nodemon app.js" | npm start
"start-server" : "node app.js" | npm run start-server
}

2. npm install nodemon --save-dev

3. npm install

4. Add Dedug > Add Configuration for auto debugging mode : 
launch.json...add these > 
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"

5. npm install --save express

6. npm install --save ejs | jodi aro thake tahole aro

7. apatoto aitukui

SECOND STEP : 
AT INITIAL :
app.js
{
    const http = require("http");
    const express = require("express");
    const path = require("path");

    const app = express();
    app.set("view engine", "ejs");
    app.set("views", "views");

    const homePagesRoute = require("./routes/homeRoutes");

    app.use(express.static(path.join(__dirname, "public")));
    app.use(homePagesRoute);

    app.listen(3000);
}

routes\homeRoutes
{
    const express = require('express');
    const path = require('path');

    const homePageController = require('../controllers/homeController');
    const router = express.Router();

    router.get('/',homePageController.getHomePage);

    module.exports = router;
}

controllers\homeController
{
    exports.getHomePage = (request, response, next) => {
        response.render("home/homePage", {
        pageTitle: "Bangla Sketch | NLP",
        path: "/"
        });
    };
}

You can begin now at least !
8. npm install body-parser --save
8. Npm install --save mysql2 | not important
9. npm install --save sequelize | important

