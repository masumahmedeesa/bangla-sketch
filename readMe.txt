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

DATABASE_URL = postgres://anhktqufnmlmnf:3b346e63613a27c784b59b55646c80c9039c4145310d8b024821fde7b016974a@ec2-54-228-207-163.eu-west-1.compute.amazonaws.com:5432/d5gpudn99k54i8

....researchIndex

        <!-- <% if(researchs.length > 0) { 
            for(let research of researchs) { %>

        <div class="shadow datasets-row">
            <div style="cursor: pointer;" onclick="window.location='/researchIndiData/<%= research.id %>'" class="d-flex">
                <div class="col-2">
                    <div class="p-2 ml-3">
                        <img src="images/dataset7.jpeg" class="backGround">
                    </div>

                </div>

                <div class="col-8">
                    <div class="p-2 ml-5">
                        <h5 style="font-weight: 600;">
                            <%= research.title %>
                        </h5>
                        <a href="#" style="text-decoration: none;">
                            <%= research.author %>
                        </a><br>
                        <div class="d-inline-block" style="color: gray;">
                            <a>2 years</a>
                            <a class="pl-3">
                                <%= research.filesSize %> KB
                            </a>
                            <a class="pl-3">8.2</a>
                            <a class="pl-3">
                                <%= research.filesCount %> files (CSV)
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <div class="p-2 d-inline-block">
                        <a href="#" style="text-decoration: none; font-size:25px;" class="fa fa-bell-o"></a>
                        <h5> 124 </h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-3"></div>
        <% } } else { %>
            <h1> Not available </h1>
        <% } %> -->



....researchIndiData

        <!-- <div class="d-flex">
            <div>
                <a href="/admin/editResearch/<%= research.id %>?edit=true" class="btn btn-success btn-sm">Edit</a>
            </div>
            <div class="ml-2">
                <form action="/admin/deleteResearch" method="POST">
                    <input type="hidden" value="<%= research.id %>" name="researchId" />
                    <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                </form>
            </div>
        </div> -->