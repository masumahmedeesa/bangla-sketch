exports.getApiPage = (request, response, next) => {
    response.render("api/apiPage", {
      pageTitle: "Bangla Sketch | NLP",
      path: "/api"
    });
  };