const express = require("express");
const path = require("path");
const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); // en vez de crear archivo.ejs creamos archivo.html pero todos los html se renderizaran a ejs
app.set("view engine", "ejs");

// middlewares

// routes
app.use(require("./routes/routes"));

// static files
app.use(express.static(path.join(__dirname, "public")));

// listening the server
app.listen(app.get("port"), () => {
	console.log("Server on port ", app.get("port"));
});
