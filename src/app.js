const express = require("express");

//Ghi log
const morgan = require("morgan");

// Ngăn chặn bên thứ 3 truy cập vào
const { default: helmet } = require("helmet");

const app = express();

// Init Middleware
app.use(morgan("dev"));
app.use(helmet());

// Init DB

// Init routes
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Welcome",
    });
});

// Handle error

module.exports = app;
