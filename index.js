const express = require("express");
require("./src/config/database");
const bookRoutes = require("./src/routes/book.router");

const app = express();

app.use("/api", bookRoutes);



app.listen(3000, () => {
    console.log("Serveur lancé");
});