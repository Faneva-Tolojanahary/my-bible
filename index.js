const express = require("express");
require("./src/config/database");
const bookRoutes = require("./src/routes/book.router");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

app.use("/api", bookRoutes);


app.listen(5000, () => {
    console.log("Serveur lancé");
});