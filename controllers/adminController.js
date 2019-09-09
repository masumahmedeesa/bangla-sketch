
exports.getAdminPage = (request, response, next) => {
  response.render("adminPanel/mainPage", {
    pageTitle: "Add Profile | NLP",
    path: "/admin/add-profile"
  });
};

exports.getAddProfile = (request, response, next) => {
  response.render("adminPanel/addProfile", {
    pageTitle: "Add Profile | NLP",
    path: "/admin/add-profile"
  });
};
