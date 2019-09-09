exports.getResearchIndex = (request, response, next) => {
    response.render("research/researchIndex", {
      pageTitle: "Bangla Sketch | NLP",
      path: "/profileIndices"
    });
};

exports.getResearchIndiData = (request, response, next) => {
  response.render("research/researchIndiData", {
    pageTitle: "Bangla Sketch | NLP",
    path: "/profileIndices"
  });
};

exports.getResearchIndiMeta = (request, response, next) => {
  response.render("research/researchIndiMeta", {
    pageTitle: "Bangla Sketch | NLP",
    path: "/profileIndices"
  });
};