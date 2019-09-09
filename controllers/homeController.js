
exports.getHomePage = (request, response, next) => {
  response.render("home/homePage", {
    pageTitle: "Bangla Sketch | NLP",
    path: "/"
  });
};

exports.getAboutUS = (request, response, next) => {
  response.render("home/aboutus",{
    pageTitle: "About Us",
    path : "/aboutus"
  });
};