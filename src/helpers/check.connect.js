"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections: ${numConnection}`);
};

// check overload
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        // Example maximum number of connections based on number osf cores
        const maxConnections = numCores * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usaged: ${memoryUsage / 1024 / 1024} MB `);

        if (numConnection > maxConnections) {
            console.log("Connection overload detected");
            // notify.send();
        }
    }, _SECONDS);
};

module.exports = {
    countConnect,
    checkOverLoad,
};
