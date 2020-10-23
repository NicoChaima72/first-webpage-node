const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index.html", { title: "First website", file: "home" });
});

router.get("/about", (req, res) => {
	res.render("about.html", { title: "About website", file: "about" });
});

router.get("/contact", (req, res) => {
	res.render("contact.html", { title: "Contact website", file: "contact" });
});

module.exports = router;
