const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/my-bible")
    .then(() => { console.log("Connexion réussi au BDD") })
    .catch((e) => { console.log(`${e}`) });