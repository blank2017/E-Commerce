const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");

const server = express();
require("dotenv").config;
const port = process.env.PORT || 5500;

const route = require("./Routes/Server.routes");

server.use(express.static(path.join(__dirname, "Public/Css")));

/** Middleware */
server.use(morgan("dev"));
server.use(express.json());
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

server.use(expressLayouts);
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "/Resources/Views"));
server.set("layout", "./Website/layouts/main-layout");

route(server);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
