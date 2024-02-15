const express = require("express");

//Ghi log
const morgan = require("morgan");
const app = express();

// Init Middleware
app.use(morgan("dev"));

// Init DB

// Init routes
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Welcome",
    });
});

// Handle error

module.exports = app;
