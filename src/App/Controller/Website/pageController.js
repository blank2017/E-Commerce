exports.getHomePage = (req, res) => {
  res.render("Website/pages/homePage", { title: "Home Page" });
};

exports.getAboutPage = (req, res) => {
  res.render("Website/pages/aboutPage"), { title: "About Page" };
};
