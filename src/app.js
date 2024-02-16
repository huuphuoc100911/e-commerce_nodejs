const express = require("express");
require("dotenv").config();

//Ghi log
const morgan = require("morgan");

// Ngăn chặn bên thứ 3 truy cập vào
const { default: helmet } = require("helmet");

// Giảm dung lượng response
const compression = require("compression");

const app = express();

// Init Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init DB
require("./dbs/init.mongodb");
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();

// Init routes
app.get("/", (req, res, next) => {
    const strCompress = "Hello";
    return res.status(200).json({
        message: "Welcome",
        metadata: strCompress.repeat(10),
    });
});

// Handle error

module.exports = app;
