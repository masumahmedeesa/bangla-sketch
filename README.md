# ABOUT
This would be a starting project in which Bangla Machine Translation and Bangla DNLP or NLP related works, tasks are provided. Corpus or API are also provided. This is a long-termed project. It is affliated by Abdullah Al Mumin, Professor, Computer Science and Engineering, Shahjalal University of Science and Technology. Thank you

### Heroku
Heroku has bangla-sketch named APP which is just a dumy view of this. :)
Website link 
<pre>
    https://bangla-sketch.herokuapp.com
</pre>

# What I did

```javascript
1. npm init .. Give your Name | Credentials | Description at package.json
- add 
    {   "start" : "nodemon app.js" | npm start
        "start-server" : "node app.js" | npm run start-server
    }

2. npm install nodemon --save-dev

3. npm install

4. Add Dedug. Then, Add Configuration for auto debugging mode : 
launch.json add these :
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"

5. npm install --save express

6. npm install --save ejs | jodi aro thake tahole aro

7. This is all :)

```
## SECOND STEP : 
### AT INITIAL :
```javascript
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

```

You can begin now at least !
```javascript
8. npm install body-parser --save
9. Npm install --save mysql2 | not important
10. npm install --save sequelize | important
```

DATABASE_URL = postgres://anhktqufnmlmnf:
```
3b346e63613a27c784b59b55646c80c9039c4145310d8b024821fde7b016974a@ec2-54-228-207-163.eu-west-1.compute.amazonaws.com:5432/d5gpudn99k54i8
```