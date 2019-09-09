
exports.getProfileIndex = (request, response, next) => {
    response.render("profiles/profileIndex", {
      pageTitle: "Bangla Sketch | NLP",
      path: "/profileIndices"
    });
};

exports.getProfileIndividual = (request, response, next) => {
  response.render("profiles/profileIndividual", {
    pageTitle: "Bangla Sketch | NLP",
    path: "/profileIndividual"
  });
};