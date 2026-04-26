const express = require("express");
const connectDB = require("./src/config/database");
const bookRoutes = require("./src/routes/book.router");
const cors = require("cors");

const app = express();
require('dotenv').config({ path: './src/config/.env' });

connectDB();

app.use(cors({
  origin: ['http://localhost:3000','https://my-bible-front.vercel.app']  , 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

app.use("/api", bookRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur ${process.env.PORT}`);
});