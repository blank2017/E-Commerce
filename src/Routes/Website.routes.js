const express = require("express");
const router = express.Router();

const websitePageController = require("../App/Controller/Website/pageController");

router.get("/", websitePageController.getHomePage);
router.get("/about", websitePageController.getAboutPage)
module.exports = router;
