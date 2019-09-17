const Research = require("../models/researchModel");

exports.getAdminPage = (request, response, next) => {
  response.render("adminPanel/mainPage", {
    pageTitle: "Add Profile | NLP",
    path: "/admin/adminPage"
  });
};

exports.getAddProfile = (request, response, next) => {
  response.render("adminPanel/addProfile", {
    pageTitle: "Add Profile | NLP",
    path: "/admin/add-profile"
  });
};

exports.getAddResearch = (request, response, next) => {
  response.render("adminPanel/editResearch", {
    pageTitle: "Add Profile | NLP",
    path: "/admin/addResearch",
    editing: false
  });
};

exports.postResearch = (request, response, next) => {
  const title = request.body.title;
  const author = request.body.author;
  const filesCount = request.body.filesCount;
  const filesSize = request.body.filesSize;
  const imageUrl = request.body.imageUrl;

  Research.create({
    title: title,
    author: author,
    filesCount: filesCount,
    filesSize: filesSize,
    imageUrl: imageUrl
  })
    .then(result => {
      response.redirect("/researchIndex");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditResearch = (request, response, next) => {
  const editMode = request.query.edit;
  if (!editMode) {
    return response.redirect("/researchIndex");
  }
  const researchedId = request.params.researchId;
  Research.findByPk(researchedId)
    .then(researchdb => {
      if (!researchdb) {
        return response.redirect("/researchIndex");
      }
      response.render("adminPanel/editResearch", {
        pageTitle: "Add Profile | NLP",
        editing: editMode,
        research: researchdb,
        path: "/admin/editResearch"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postEditResearch = (request, response, next) => {
  const reId = request.body.researchId;
  const updateTitle = request.body.title;
  const updatedAuthor = request.body.author;
  const updatedFilesCount = request.body.filesCount;
  const updatedFilesSize = request.body.filesSize;
  const updatedImageUrl = request.body.imageUrl;
  Research.findByPk(reId)
    .then(research => {
      research.title = updateTitle;
      research.author = updatedAuthor;
      research.filesCount = updatedFilesCount;
      research.filesSize = updatedFilesSize;
      research.imageUrl = updatedImageUrl;
      return research.save();
    })
    .then(result => {
      response.redirect("/researchIndex");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteResearch = (request, response, next) => {
  const researchedId = request.body.researchId;
  Research.findByPk(researchedId)
    .then(research => {
      return research.destroy();
    })
    .then(result => {
      response.redirect("/researchIndex");
    })
    .catch(err => {
      console.log(err);
    });
};
