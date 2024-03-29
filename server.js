const app = require("./src/app");

const PORT = process.env.PORT || 3055;
console.log(process.env.PORT);

const server = app.listen(PORT, () => {
    console.log(`eCommerce start with port ${PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Exit server express");
    });
});
