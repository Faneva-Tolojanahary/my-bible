const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let dbUri;

    if (process.env.NODE_ENV == "development") {
      dbUri = process.env.DB_LOCAL;
      console.log("En local");
      
    } else {
      dbUri = process.env.DB_PROD;
      console.log("En prod");
      
    }

    const options = {
      serverSelectionTimeoutMS: 5000, 
    };

    if (process.env.NODE_ENV === "production") {
      options.retryWrites = true;
      options.ssl = true;
    }

    await mongoose.connect(dbUri, options);
    console.log("Connexion réussi");

  } catch (error) {
    console.error('❌ Erreur de connexion MongoDB:', error.message);
  }
};

module.exports = connectDB;