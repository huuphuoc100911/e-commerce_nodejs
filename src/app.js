const express = require("express");

//Ghi log
const morgan = require("morgan");

// Ngăn chặn bên thứ 3 truy cập vào
const { default: helmet } = require("helmet");

const compression = require("compression");

const app = express();

// Init Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// Init DB

// Init routes
app.get("/", (req, res, next) => {
    const strCompress = "Hello";
    return res.status(200).json({
        message: "Welcome",
        metadata: strCompress.repeat(10000),
    });
});

// Handle error

module.exports = app;
