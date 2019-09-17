const Research = require("../models/researchModel");

// exports.getResearchIndex = (request, response, next) => {
//   response.render("research/researchIndex", {
//     pageTitle: "Bangla Sketch | NLP",
//     path: "/profileIndices"
//   });
// };

exports.getResearchIndex = (request, response, next) => {
  Research.findAll()
    .then(research => {
      response.render("research/researchIndex", {
        pageTitle: "Bangla Sketch | NLP",
        researchs: research,
        path: "/researchIndex"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getResearchIndiData = (request, response, next) => {
  // const editMode = request.query.edit;
  // if (!editMode) {
  //   return response.redirect("/researchIndex");
  // }
  const researchedId = request.params.researchId;
  Research.findByPk(researchedId)
    .then(researchdb => {
      response.render("research/researchIndiData", {
        pageTitle: researchdb.title,
        research: researchdb,
        path: "/researchIndiData"
      });
    })
    .catch(err => {
      console.log(err);
    });
};


// exports.getResearchIndiData = (request, response, next) => {
//   response.render("research/researchIndiData", {
//     pageTitle: "Bangla Sketch | NLP",
//     path: "/profileIndices"
//   });
// };

exports.getResearchIndiMeta = (request, response, next) => {
  response.render("research/researchIndiMeta", {
    pageTitle: "Bangla Sketch | NLP",
    path: "/profileIndices"
  });
};
